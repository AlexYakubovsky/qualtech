import PropTypes from 'prop-types'
import cn from 'classnames'
import s from './style.module.scss'

const Icon = ({
	children,
	className,
	style,
	name,
	size,
	color,
	title,
	...props
}) => {
	const classNames = cn(
		'icon-' + name,
		{
			[s[color]]: color,
			[s[size]]: size,
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
		/>
	)
}

Icon.propTypes = {
	className: PropTypes.string,
	style: PropTypes.shape({}),
	name: PropTypes.string.isRequired,
	size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm']),
	color: PropTypes.oneOf(['white', 'gray']),
	title: PropTypes.string
}

export default Icon
