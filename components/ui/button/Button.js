import PropTypes from 'prop-types'
import Link from '@/components/Link'
import { Icon } from '../icon'
import styles from './button.module.sass'

const Button = ({
	children,
	as,
	size,
	view,
	className = '',
	fluid,
	disabled,
	type,
	onClick,
	style,
	href,
	iconRight,
	...props
}) => {
	let classList = ''

	if (view) {
		classList = `${classList} ${styles[view]}`
	}
	if (size) {
		classList = `${classList} ${styles[size]}`
	}
	if (fluid) {
		classList = `${classList} ${styles.isFluid}`
	}

	const cn = className.concat(' ', classList || '').trim()

	return as === 'link' ? (
		<Link
			href={href}
			style={style}
			className={`${styles.button} ${cn}`}
			disabled={disabled}
			activeClassName={styles.active}
		>
			<a>
				{children}
				{iconRight && <Icon name={iconRight} size='md' style={{ marginLeft: 14 }}></Icon>}
			</a>
		</Link>
	) : (
		<button
			style={style}
			className={`${styles.button} ${cn}`}
			type={type}
			disabled={disabled}
			onClick={!disabled ? onClick : () => {}}
			{...props}
		>
			{children}
			{iconRight && <Icon name={iconRight} size='md' style={{ marginLeft: 14 }}></Icon>}
		</button>
	)
}

Button.defaultProps = {
	as: 'button',
	size: 'lg',
	view: 'primary',
	fluid: false,
	disabled: false,
	type: 'button'
}

Button.propTypes = {
	as: PropTypes.string,
	size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm']),
	view: PropTypes.oneOf(['primary', 'callback']),
	className: PropTypes.string,
	fluid: PropTypes.bool,
	disabled: PropTypes.bool,
	type: PropTypes.string,
	onClick: PropTypes.func,
	href: PropTypes.string,
	iconRight: PropTypes.string
}

export default Button
