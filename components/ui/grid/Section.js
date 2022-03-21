import PropTypes from 'prop-types'
import cn from 'classnames'

const Section = ({
	children,
	className = '',
	style,
	first,
	backgroundImg,
	...rest
}) => {
	const classNames = cn(
		'section',
		{
			'section-first': first
		},
		className
	)

	if (backgroundImg) {
		style = {
			...style,
			backgroundImage: `url(${backgroundImg.src})`
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
	backgroundImg: PropTypes.any
}

export default Section
