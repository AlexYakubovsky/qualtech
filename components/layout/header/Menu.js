import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { contacts } from 'constants/contacts'
import useWindowSize from 'hooks/useWindowSize'
import MenuItem from './MenuItem'
import { Button, Screen, Text } from 'components/ui'
import s from './header.module.scss'

export default function Menu({ closeMenu }) {
	const [isMenuOnHover, setIsMenuOnHover] = useState(false)
	const { height } = useWindowSize()
	const menu = [
		{ title: 'Наши услуги', link: '#our-services' },
		{ title: 'Как мы работаем', link: '#how-we-work' },
		{ title: 'Стоимость услуг', link: '#price' }
	]

	const toggleHover = hasHover => setIsMenuOnHover(hasHover)

	const variantsMenu = {
		open: {
			overflow: 'hidden auto',
			visibility: 'visible'
		},
		closed: {
			overflow: 'hidden',
			visibility: 'hidden'
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
			style={{ height: height ? height - 100 : '100%' }}
			className={s.menu}
			variants={variantsMenu}
		>
			<div className={s['menu-wrapper']}>
				<motion.ul className={s['menu__nav-list']} variants={variantsNavList}>
					{menu.map((menu, i) =>
						<MenuItem
							key={i}
							title={menu.title}
							link={menu.link}
							toggleHover={toggleHover}
							isMenuOnHover={isMenuOnHover}
							closeMenu={closeMenu}
						/>
					)}
				</motion.ul>
				<Screen size='lg' down>
					<motion.div className={s['menu__buttons-mobile']} variants={variantsMenuFooter}>
						<Button size='md' iconRight='plus' className={s['apply-button']} fluid>
							Оставить заявку
						</Button>
						<Button
							as='a'
							href={`tel:${contacts.number}`}
							size='md'
							view='callback'
							iconRight='phone'
							fluid
						>
							{contacts.number}
						</Button>
					</motion.div>
				</Screen>
				<motion.ul className={s.menu__footer} variants={variantsMenuFooter}>
					<Text as='li'>Разработка любой сложности.</Text>
					<Text as='li'>Аналитика | UX/UI | Front-end | Back-end</Text>
					<Text as='li'>Продвижение | Техническая поддержка</Text>
				</motion.ul>
			</div>
		</motion.div>
	)
}
