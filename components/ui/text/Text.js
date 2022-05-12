import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import s from './style.module.scss'

const Text = ({
	children,
	as: ElementType = 'span',
	className,
	style,
	size,
	color,
	align,
	weight,
	overflow,
	transform,
	decoration,
	whiteSpace,
	cursor,
	view,
	...props
}) => {
	const classList = cn(
		s.text,
		{
			[s['text-' + size]]: size,
			[s['color-' + color]]: color,
			[s['text-' + align]]: align,
			[s['text-' + weight]]: weight,
			[s['text-overflow-' + overflow]]: overflow,
			[s['text-transform-' + transform]]: transform,
			[s['text-decoration-' + decoration]]: decoration,
			[s['white-space-' + whiteSpace]]: whiteSpace,
			[s['cursor-' + cursor]]: cursor,
			[s['text-' + view]]: view
		},
		className
	)

	return (
		<ElementType
			className={classList}
			style={style}
			{...props}
		>
			{children}
		</ElementType>
	)
}

Text.defaultProps = {
	as: 'span'
}

Text.propTypes = {
	as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div', 'li', 'b', 'i', 'small', 'strong']),
	className: PropTypes.string,
	style: PropTypes.shape({}),
	size: PropTypes.oneOf(['xxl', 'xl', 'lg', 'md', 'sm', 'xs']),
	color: PropTypes.oneOf(['primary', 'green', 'black', 'violet']),
	align: PropTypes.oneOf(['start', 'end', 'center', 'justify']),
	weight: PropTypes.oneOf(['bold', 'medium', 'regular']),
	overflow: PropTypes.oneOf(['fade', 'ellipsis']),
	transform: PropTypes.oneOf(['lowercase', 'uppercase', 'capitalize']),
	decoration: PropTypes.oneOf(['underline', 'line-through']),
	whiteSpace: PropTypes.oneOf(['pre-line', 'nowrap']),
	cursor: PropTypes.oneOf(['pointer']),
	view: PropTypes.oneOf(['seo'])
}

export default Text
