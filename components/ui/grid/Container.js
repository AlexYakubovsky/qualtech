import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Container = ({
	children,
	className,
	fluid,
	...rest
}) => {
	const classList = cn(
		'container',
		{
			['container-fluid']: fluid
		},
		className
	)

	return (
		<div
			className={classList}
			{...rest}
		>
			{children}
		</div>
	)
}

Container.propstype = {
	className: PropTypes.shape({}),
	fluid: PropTypes.bool
}

export default Container
