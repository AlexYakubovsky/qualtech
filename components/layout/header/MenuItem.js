import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { motion } from 'framer-motion'
import AnchorLink from 'components/utils/AnchorLink'
import { Text } from 'components/ui'
import s from './header.module.scss'

const MenuItem = ({
	title,
	link,
	toggleHover,
	isMenuOnHover,
	closeMenu
}) => {
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
			className={cn(s['menu-item'], {[s.onHover]: isMenuOnHover})}
			onMouseEnter={() => setOnTagHover(true)}
			onMouseLeave={() => setOnTagHover(false)}
		>
			<AnchorLink
				to={link}
				onClick={closeMenu}
			>
				<Text>{title}</Text>
			</AnchorLink>
		</motion.li>
	)
}

MenuItem.propTypes = {
	title: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	toggleHover: PropTypes.func.isRequired,
	isMenuOnHover: PropTypes.bool.isRequired,
	closeMenu: PropTypes.func.isRequired
}

export default MenuItem
