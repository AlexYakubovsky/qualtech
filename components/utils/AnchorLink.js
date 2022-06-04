import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-scroll'
import { Text } from 'components/ui'

const AnchorLink = ({
	to,
	offset,
	smooth,
	title,
	size,
	color,
	weight,
	transform,
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
			<Text
				size={size}
				color={color}
				weight={weight}
				transform={transform}
			>
				{title}
			</Text>
		</Link>
	)
}

AnchorLink.defaultProps = {
	offset: -50
}

AnchorLink.propTypes = {
	to: PropTypes.string.isRequired,
	offset: PropTypes.number,
	smooth: PropTypes.bool,
	title: PropTypes.string.isRequired,
	size: PropTypes.string,
	color: PropTypes.string,
	weight: PropTypes.string,
	transform: PropTypes.string
}

export default AnchorLink
