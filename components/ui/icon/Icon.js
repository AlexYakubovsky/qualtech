import PropTypes from 'prop-types'
import styles from './icon.module.sass'

const Icon = ({
	children,
	className = '',
	name,
	size,
	color,
	style,
	title,
	hoverColor,
	...props
}) => {
	let classList = ''

	if (color) {
		classList = `${classList} ${styles[color]}`
	}
	if (size) {
		classList = `${classList} ${styles[size]}`
	}
	if (hoverColor) {
		classList = `${classList} ${styles.hover} ${styles[`hover-${hoverColor}`]}`
	}

	const cn = className.concat(' ', classList || '').trim()

	if (!name) return null

	return (
		<i
			className={`${'icon-' + name} ${cn}`}
			style={style}
			title={title}
			{...props}
		>
			{children && <span className={styles.icon_text}>{children}</span>}
		</i>
	)
}

Icon.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string.isRequired,
	size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm']),
	color: PropTypes.oneOf(['white', 'gray']),
	title: PropTypes.string,
	style: PropTypes.object,
	hoverColor: PropTypes.oneOf(['gray'])
}

export default Icon
