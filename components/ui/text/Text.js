import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './text.module.sass'

const Text = ({
	as: ElementType = 'span',
	size,
	color,
	align,
	weight,
	overflow,
	className = '',
	style,
	children,
	...props
}) => {
	const classList = cn(
		{
			[styles['text-' + size]]: size,
			[styles['color-' + color]]: color,
			[styles['text-' + align]]: align,
			[styles['text-' + weight]]: weight,
			[styles['text-overflow-' + overflow]]: overflow
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
	size: PropTypes.oneOf(['xxl', 'xl', 'lg', 'md', 'sm']),
	color: PropTypes.oneOf(['primary', 'green']),
	align: PropTypes.oneOf(['start', 'end', 'center', 'justify']),
	weight: PropTypes.oneOf(['bold', 'light', 'medium', 'regular']),
	overflow: PropTypes.oneOf(['fade', 'ellipsis']),
	className: PropTypes.string,
	style: PropTypes.shape({})
}

export default Text
