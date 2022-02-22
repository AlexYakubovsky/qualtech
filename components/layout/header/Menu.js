import { useState } from 'react'
import { motion } from 'framer-motion'
import useWindowSize from '@/hooks/useWindowSize'
import MenuItem from './MenuItem'
import { Text } from '@/components/ui'
import styles from './header.module.sass'

export default function Menu() {
	const [isMenuOnHover, setIsMenuOnHover] = useState(false)
	const { height } = useWindowSize()
	const menu = [
		{ title: 'Наши услуги', link: '#our-services' },
		{ title: 'Как мы работаем', link: '#how-we-work' },
		{ title: 'Стоимость услуг', link: '#services-cost' }
	]

	const toggleHover = hasHover => setIsMenuOnHover(hasHover)

	const variantsMenu = {
		open: {
			overflowY: 'auto',
			overflowX: 'hidden',
		}
	}

	const variantsNavList = {
		open: {
			opacity: 1,
			transition: { staggerChildren: 0.1, delayChildren: 0.2 }
		},
		closed: {
			opacity: 0,
			transition: { staggerChildren: 0.05, staggerDirection: -1 }
		}
	}

	const variantsMenuFooter = {
		open: {
			y: 0,
			opacity: 1,
			transition: {
				delay: 0.7
			}
		},
		closed: {
			y: 50,
			opacity: 0,
			transition: {
				y: { stiffness: 1000 }
			}
		}
	}

	return (
		<motion.div
			style={{ height: `${height - 100}px` }}
			className={styles.menu}
			variants={variantsMenu}
		>
			<div className={styles['menu-wrapper']}>
				<motion.ul className={styles['menu__nav-list']} variants={variantsNavList}>
					{menu.map((v, i) =>
						<MenuItem
							key={i}
							title={v.title}
							toggleHover={toggleHover}
							isMenuOnHover={isMenuOnHover}
						/>
					)}
				</motion.ul>
				<motion.ul className={styles.menu__footer} variants={variantsMenuFooter}>
					<Text as='li' size='sm'>Разработка любой сложности.</Text>
					<Text as='li' size='sm'>Аналитика | UX/UI | Front-end | Back-end</Text>
					<Text as='li' size='sm'>Продвижение | Техническая поддержка</Text>
				</motion.ul>
			</div>
		</motion.div>
	)
}
