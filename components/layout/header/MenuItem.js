import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Text } from '@/components/ui'
import styles from './header.module.sass'

export default function MenuItem({ title, isMenuOnHover, toggleHover }) {
	const [onTagHover, setOnTagHover] = useState(false)

	useEffect(() => {
		onTagHover && toggleHover(true)
		return () => toggleHover(false)
	}, [onTagHover, toggleHover])

	const variants = {
		open: {
			y: 0,
			opacity: 1,
			cursor: 'pointer',
			transition: {
				y: { stiffness: 1000, velocity: -100 }
			}
		},
		closed: {
			y: 300,
			opacity: 0,
			cursor: 'default',
			transition: {
				y: { stiffness: 1000 }
			}
		}
	}

	return (
		<motion.li
			variants={variants}
			className={`${styles['menu-item']} ${isMenuOnHover ? styles.onHover : ''}`}
			onMouseEnter={() => setOnTagHover(true)}
			onMouseLeave={() => setOnTagHover(false)}
		>
			<Text style={{fontSize: 100, lineHeight: '105px'}}>{title}</Text>
		</motion.li>
	)
}
