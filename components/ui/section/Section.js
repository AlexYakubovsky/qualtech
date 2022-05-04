import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import s from './style.module.scss'

const Section = ({
	children,
	className,
	style,
	first,
	p0,
	pt0,
	pb0,
	backgroundImg,
	...rest
}) => {
	const classNames = cn(
		s.section,
		{
			[s['section-first']]: first,
			[s.p0]: p0,
			[s.pt0]: pt0,
			[s.pb0]: pb0
		},
		className
	)

	if (backgroundImg) {
		style = {
			backgroundImage: `url(${backgroundImg})`,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center top',
			backgroundSize: 'cover',
			...style,
		}
	}

	return (
		<section
			className={classNames}
			style={style}
			{...rest}
		>
			{children}
		</section>
	)
}

Section.propTypes = {
	className: PropTypes.string,
	style: PropTypes.shape({}),
	first: PropTypes.bool,
	p0: PropTypes.bool,
	pt0: PropTypes.bool,
	pb0: PropTypes.bool,
	backgroundImg: PropTypes.any
}

export default Section
