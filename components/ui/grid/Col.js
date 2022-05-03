import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { mediaBreakpoints } from 'constants/grid'

const Col = ({
	children,
	className,
	style,
	...rest
}) => {
	let
		cls = [],
		bk,
		val

	// add col classes
	const breakpoints = Object.keys(mediaBreakpoints)
	for (let i = breakpoints.length - 1; i > -1; i--) {
		bk = breakpoints[i]

		// add col-{bk}-{val}
		val = rest[bk]
		if (val) cls.push('col-' + bk + '-' + val)

		// add offset-{bk}-{val}
		val = rest['offset-' + bk]
		if (val >= 0) cls.push('offset-' + bk + '-' + val)

		// add order-{bk}-{val}
		val = rest['order-' + bk]
		if (val >= 0) cls.push('order-' + bk + '-' + val)

		// remove from rest
		delete rest[bk]
		delete rest['offset-' + bk]
		delete rest['order-' + bk]
	}

	const classList = cn(
		cls,
		className
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

Col.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	style: PropTypes.shape({}),
	xs: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
	sm: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
	md: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
	lg: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
	xl: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
}

export default Col
