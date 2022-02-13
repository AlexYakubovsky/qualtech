import PropTypes from 'prop-types'
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
	let classList = ''

	if (size) {
		classList = `${classList} ${styles['text-' + size]}`
	}
	if (color) {
		classList = `${classList} ${styles['color-' + color]}`
	}
	if (align) {
		classList = `${classList} ${styles['text-' + align]}`
	}
	if (weight) {
		classList = `${classList} ${styles['text-' + weight]}`
	}
	if (overflow) {
		classList = `${classList} ${styles['text-overflow-' + overflow]}`
	}

	const cn = className.concat(' ', classList || '').trim()

	return (
		<ElementType
			className={cn}
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
	as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div', 'b', 'i', 'small', 'strong']),
	size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm']),
	color: PropTypes.oneOf(['green']),
	align: PropTypes.oneOf(['start', 'end', 'center', 'justify']),
	weight: PropTypes.oneOf(['bold', 'light', 'medium', 'regular']),
	overflow: PropTypes.oneOf(['fade', 'ellipsis']),
	className: PropTypes.string,
	style: PropTypes.shape({})
}

export default Text