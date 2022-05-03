import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Link from 'components/Link'
import { Icon } from '../icon'
import s from './style.module.scss'

const Button = ({
	as: ElementType = 'button',
	children,
	className,
	style,
	size,
	view,
	fluid,
	disabled,
	type,
	onClick,
	href,
	iconRight,
	...props
}) => {
	const classNames = cn(
		s.button,
		s[view],
		s[size],
		{
			[s.isFluid]: fluid
		},
		className
	)

	return ElementType === 'a' ? (
		<Link
			href={href}
			style={style}
			className={classNames}
			disabled={disabled}
			activeClassName={s.active}
		>
			<a>
				{children}
				{iconRight && <Icon name={iconRight} size='md' style={{ marginLeft: 14 }}/>}
			</a>
		</Link>
	) : (
		<button
			style={style}
			className={classNames}
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
	size: 'lg',
	view: 'primary',
	fluid: false,
	disabled: false,
	type: 'button'
}

Button.propTypes = {
	as: PropTypes.oneOf(['button', 'span', 'div', 'a']),
	className: PropTypes.string,
	style: PropTypes.shape({}),
	size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm']),
	view: PropTypes.oneOf(['primary', 'secondary', 'callback']),
	fluid: PropTypes.bool,
	disabled: PropTypes.bool,
	type: PropTypes.string,
	onClick: PropTypes.func,
	href: PropTypes.string,
	iconRight: PropTypes.string
}

export default Button
