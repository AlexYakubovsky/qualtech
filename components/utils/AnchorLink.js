import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-scroll'

const AnchorLink = ({
	children,
	to,
	offset,
	smooth,
	...rest
}) => {
	return (
		<Link
			to={to}
			offset={offset}
			smooth={smooth}
			spy={true}
			{...rest}
		>
			{children}
		</Link>
	)
}

AnchorLink.defaultProps = {
	offset: -50
}

AnchorLink.propTypes = {
	to: PropTypes.string.isRequired,
	offset: PropTypes.number,
	smooth: PropTypes.bool
}

export default AnchorLink
