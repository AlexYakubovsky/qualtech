import { useRef, useEffect } from 'react'
import { motion, useCycle } from 'framer-motion'
import { contacts } from '@/constants/index'
import useEvent from '@/hooks/useEvent'
import useOverflow from '@/hooks/useOverflow'
import MenuToggle from './MenuToggle'
import Menu from './Menu'
import { Text, Button } from '@/components/ui'
import styles from './header.module.sass'

export default function Header() {
	const [isOpen, toggleOpen] = useCycle(false, true)
	const headerRef = useRef(null)
	const { handlerOverflow } = useOverflow()

	useEffect(() => {
		isOpen && handlerOverflow(true)
		return () => handlerOverflow(false)
	}, [isOpen])

	const variantsBackground = {
		open: (height = 1000) => ({
			clipPath: `circle(${height * 2 + 200}px at 50% 50px)`,
			opacity: 1,
			transition: {
				type: 'spring',
				stiffness: 15,
				restDelta: 2,
				opacity: 1
			}
		}),
		closed: {
			clipPath: 'circle(30px at 50% 50px)',
			opacity: 0,
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

	const variantsCallbackButton = {
		open: { x: 5 },
		close: { x: 0 }
	}

	const handlerHeaderPosition = () => {
		const distanceY = window.pageYOffset || document.documentElement.scrollTop

		if (distanceY >= 1) {
			headerRef.current.classList.add(styles.scroll)
		} else {
			headerRef.current.classList.remove(styles.scroll)
		}
	}

	useEvent('scroll', handlerHeaderPosition)

	return (
		<motion.header
			ref={headerRef}
			className={styles.header}
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
		>
			<div className={styles.header__logo}>
				<Text size='xl' style={{ lineHeight: '31px' }}>Разработка сайтов</Text>
			</div>

			<nav className={styles.header__nav}>
				<motion.div className={styles['header__nav-background']} variants={variantsBackground} />
				<Menu />
				<MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />
			</nav>

			<div className={styles.header__buttons}>
				<motion.div variants={variantsFormButton}>
					<Button size='md' iconRight='plus' style={{ marginRight: 30 }}>
						Оставить заявку
					</Button>
				</motion.div>
				<motion.div variants={variantsCallbackButton}>
					<Button
						as='link'
						href={`tel:${contacts.phone}`}
						size='md'
						view='callback'
						iconRight='phone'
					>
						{contacts.phone}
					</Button>
				</motion.div>

			</div>
		</motion.header>
	)
}