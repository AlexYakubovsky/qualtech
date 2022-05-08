import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import lottie from 'lottie-web'

const Lottie = ({
	path,
	className,
	style,
	...props
}) => {
	const lottieRef = useRef(null)

	useEffect(() => {
		if (path && lottie) {
			const animation = lottie.loadAnimation({
				container: lottieRef.current,
				path: path,
				renderer: 'svg',
				loop: true,
				autoplay: true
			})

			return () => animation.destroy()
		}
	}, [lottie, path])

	return (
		<div
			ref={lottieRef}
			className={className}
			style={style}
			{...props}
		/>
	)
}

Lottie.propTypes = {
	path: PropTypes.string.isRequired,
	className: PropTypes.string,
	style: PropTypes.shape({})
}

export default Lottie
