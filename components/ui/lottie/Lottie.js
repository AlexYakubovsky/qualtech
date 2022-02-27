import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import lottie from 'lottie-web'

const Lottie = ({ path, ...props }) => {
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
		<div ref={lottieRef} {...props} />
	)
}

Lottie.defaultProps = {
	path: PropTypes.string.isRequired
}

export default Lottie
