import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import cn from 'classnames'
import s from './style.module.scss'

const ColorfulBackground = ({
	top,
	bottom,
	left,
	right,
	className,
	style,
	...props
}) => {
	const colorfulClassList = cn(
		s['colorful-background'],
		className
	)

	const colorfulStyle = {
		top,
		bottom,
		left,
		right,
		...style
	}
	return (
		<div className={s['colorful-background-wrapper']}>
			<div
				className={colorfulClassList}
				style={colorfulStyle}
				{...props}
			>
				<Image
					src='/images/sections/hard-project/circle.png'
					layout='fill'
					objectFit='cover'
					quality='100'
					alt=''
				/>
			</div>
		</div>
	)
}

ColorfulBackground.propTypes = {
	top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	className: PropTypes.string,
	style: PropTypes.shape({})
}

export default ColorfulBackground
