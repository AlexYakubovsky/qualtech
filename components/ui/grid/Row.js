import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Row = ({
	children,
	className,
	style,
	row,
	align,
	justify,
	...rest
}) => {
	const classList = cn(
		'row',
		{
			['row-' + row]: row,
			['align-items-' + align]: align,
			['justify-content-' + justify]: justify,
		},
		className,
	)

	return (
		<div
			className={classList}
			style={style}
			{...rest}
		>
			{children}
		</div>
	)
}

Row.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	style: PropTypes.shape({}),
	row: PropTypes.oneOf([10, 20, 30]),
	align: PropTypes.oneOf(['start', 'center', 'end']),
	justify: PropTypes.oneOf([
		'start',
		'center',
		'end',
		'space-between',
	]),
}

export default Row
