import React from 'react'
import PropTypes from 'prop-types'
import { motion, useSpring, useTransform, useViewportScroll } from 'framer-motion'

const ViewportScroll = ({
	children,
	inputRange,
	outputRange,
	xStyle,
	yStyle,
	horizontal,
	...props
}) => {
	const { scrollY } = useViewportScroll()
	const scrollingRangeTop = useTransform(scrollY, inputRange, outputRange)
	const currentPosition = useSpring(scrollingRangeTop, { stiffness: 200, damping: 40 })

	return (
		<motion.div
			style={{
				x: horizontal ? currentPosition : xStyle,
				y: !horizontal ? currentPosition : yStyle
			}}
			{...props}
		>
			{children}
		</motion.div>
	)
}

ViewportScroll.defaultProps = {
	xStyle: '0',
	yStyle: '0',
	horizontal: false
}

ViewportScroll.propTypes = {
	inputRange: PropTypes.array.isRequired,
	outputRange: PropTypes.array.isRequired,
	xStyle: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	yStyle: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	horizontal: PropTypes.bool
}

export default ViewportScroll
