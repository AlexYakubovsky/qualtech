import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, useCycle } from 'framer-motion'
import { contacts } from 'constants/contacts'
import useEvent from 'hooks/useEvent'
import useOverflow from 'hooks/useOverflow'
import useWindowSize from 'hooks/useWindowSize'
import MenuToggle from './MenuToggle'
import Menu from './Menu'
import { Text, Button, Screen } from 'components/ui'
import s from './header.module.scss'

const Header = React.memo(() => {
	const [isOpen, toggleOpen] = useCycle(false, true)
	const headerRef = useRef(null)
	const { handlerOverflow } = useOverflow()
	const { deviceWidth } = useWindowSize()

	useEffect(() => {
		isOpen && handlerOverflow(true)
		return () => handlerOverflow(false)
	}, [isOpen, handlerOverflow])

	const variantsBackground = {
		open: (height = 1000) => ({
			clipPath: deviceWidth === 'large'
				? `circle(${height * 2 + 200}px at 50% 50px)`
				: `circle(${height * 2 + 200}px at 20px 20px)`,
			transition: {
				type: 'spring',
				stiffness: 15,
				restDelta: 2
			}
		}),
		closed: {
			clipPath: deviceWidth === 'large'
				? 'circle(30px at 50% 50px)'
				: 'circle(30px at 20px 20px)',
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
			headerRef.current.classList.add(s.scroll)
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
			<div className={s.header__logo}>
				<div className={s['logo-img']}>
					<Image src='/images/logo.png' layout='fill' objectFit='cover' />
				</div>
				<Text size='xl'>Разработка сайтов</Text>
			</div>
			<nav className={s.header__nav}>
				<motion.div className={s['header__nav-background']} variants={variantsBackground} />
				<Menu />
				<MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />
			</nav>
			<Screen size='lg'>
				<div className={s.header__buttons}>
					<motion.div variants={variantsFormButton}>
						<Button size='md' iconRight='plus' className={s['apply-button']}>
							Оставить заявку
						</Button>
					</motion.div>
					<Button
						as='a'
						href={`tel:${contacts.number}`}
						size='md'
						view='callback'
						iconRight='phone'
					>
						{contacts.number}
					</Button>
				</div>
			</Screen>
		</motion.header>
	)
})

export default Header