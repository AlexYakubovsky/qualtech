import PropTypes from 'prop-types'
import cn from 'classnames'
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
	const classNames = cn(
		'icon-' + name,
		{
			[styles[color]]: color,
			[styles[size]]: size,
			[styles.hover]: hoverColor,
			[styles['hover-' + hoverColor]]: hoverColor
		},
		className
	)

	if (!name) return null

	return (
		<i
			className={classNames}
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
