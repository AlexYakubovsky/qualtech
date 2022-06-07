import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, useCycle } from 'framer-motion'
import { contacts } from 'constants/contacts'
import useEvent from 'hooks/useEvent'
import useOverflow from 'hooks/useOverflow'
import useWindowSize from 'hooks/useWindowSize'
import AnchorLink from 'components/utils/AnchorLink'
import MenuToggle from './MenuToggle'
import Menu from './Menu'
import { Button, Screen, FadeIn } from 'components/ui'
import s from './header.module.scss'

const Header = React.memo(() => {
	const [isOpen, toggleOpen] = useCycle(false, true)
	const headerRef = useRef(null)
	const { handlerOverflow } = useOverflow()
	const { deviceWidth } = useWindowSize()

	useEffect(() => {
		isOpen && deviceWidth === 'large' && handlerOverflow(true)
		return () => handlerOverflow(false)
	}, [isOpen, deviceWidth, handlerOverflow])

	const variantsBackground = {
		open: (height = 1000) => ({
			clipPath: deviceWidth === 'large'
				? `circle(${height * 2 + 200}px at 50% 50px)`
				: `circle(${height * 2 + 200}px at 40px 20px)`,
			transition: {
				type: 'spring',
				stiffness: 15,
				restDelta: 2
			}
		}),
		closed: {
			clipPath: deviceWidth === 'large'
				? 'circle(30px at 50% 50px)'
				: 'circle(30px at 40px 20px)',
			transition: {
				type: 'spring',
				delay: 0.5,
				stiffness: 200,
				damping: 40
			}
		}
	}

	const variantsFormButton = {
		open: {
			y: 0,
			opacity: 1,
			transition: {
				delay: 0.8
			}
		},
		closed: {
			y: -50,
			opacity: 0,
			transition: {
				delay: 0.3,
				y: { stiffness: 10 }
			}
		}
	}

	const handlerHeaderPosition = () => {
		const distanceY = window.pageYOffset || document.documentElement.scrollTop

		if (distanceY) {
			headerRef?.current?.classList.add(s.scroll)
		} else {
			headerRef.current.classList.remove(s.scroll)
		}
	}

	useEvent('scroll', handlerHeaderPosition)

	if (!deviceWidth) return null

	return (
		<motion.header
			ref={headerRef}
			className={s.header}
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
		>
			<FadeIn className={s.header__logo} y={0}>
				<div className={s['logo-img']}>
					<Image src='/images/logo-text.svg' layout='fill' objectFit='cover' />
				</div>
			</FadeIn>
			<nav className={s.header__nav}>
				<motion.div className={s['header__nav-background']} variants={variantsBackground} />
				<Menu closeMenu={toggleOpen} />
				<MenuToggle toggle={toggleOpen} isOpen={isOpen} />
			</nav>
			<Screen size='lg'>
				<div className={s.header__buttons}>
					<motion.div variants={variantsFormButton}>
						<AnchorLink to='#leave-request' onClick={toggleOpen}>
							<Button size='md' iconRight='plus' className={s['apply-button']}>
								Оставить заявку
							</Button>
						</AnchorLink>
					</motion.div>
					<FadeIn y={0}>
						<Button
							as='a'
							href={`tel:${contacts.number}`}
							size='md'
							view='callback'
							iconRight='phone'
						>
							{contacts.number}
						</Button>
					</FadeIn>
				</div>
			</Screen>
		</motion.header>
	)
})

export default Header
