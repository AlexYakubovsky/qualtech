import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import cn from 'classnames'
import { FadeIn } from '../framer'
import s from './style.module.scss'

const ColorfulBackground = ({
	top,
	bottom,
	left,
	right,
	className,
	style,
	fade,
	isActiveFade,
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
			<FadeIn
				isActive={isActiveFade}
				{...fade}
			>
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
			</FadeIn>
		</div>
	)
}

ColorfulBackground.defaultProps = {
	fade: {
		x: 0,
		duration: 2,
		once: false
	},
	isActiveFade: true
}

ColorfulBackground.propTypes = {
	top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	className: PropTypes.string,
	style: PropTypes.shape({}),
	fade: PropTypes.shape({}),
	isActiveFade: PropTypes.bool
}

export default ColorfulBackground
