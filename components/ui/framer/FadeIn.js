import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const FadeIn = ({
	children,
	isActive,
	fade,
	duration,
	delay,
	x,
	y,
	variantsVisible,
	variantsHidden,
	once,
	...props
}) => {
	const variants = {
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
			...variantsVisible
		},
		hidden: {
			opacity: 0,
			x: (fade === 'right' || fade === 'left') ? (fade === 'right' ? x : -`${x}`) : 0,
			y: (fade === 'top' || fade === 'bottom') ? (fade === 'bottom' ? y : -`${y}`) : 0,
			...variantsHidden
		}
	}

	if (!isActive) {
		return  (
			<div className={props?.className}>{children}</div>
		)
	}

	return (
		<motion.div
			variants={variants}
			initial='hidden'
			whileInView='visible'
			viewport={{
				once: once
			}}
			transition={{
				duration: duration,
				delay: delay
			}}
			{...props}
		>
			{children}
		</motion.div>
	)
}

FadeIn.defaultProps = {
	isActive: true,
	fade: 'bottom',
	duration: 1,
	delay: 0.2,
	x: 60,
	y: 30,
	once: true
}

FadeIn.propTypes = {
	fade: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
	isActive: PropTypes.bool,
	duration: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	delay: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	x: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	y: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	variantsVisible: PropTypes.shape({}),
	variantsHidden: PropTypes.shape({}),
	once: PropTypes.bool,
}

export default FadeIn
