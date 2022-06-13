import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

const AnchorLink = ({
	children,
	href,
	page,
	offset,
	smooth,
	onClick,
	...rest
}) => {
	const router = useRouter()
	const isCurrentPage = router.pathname === page

	const routerChange = () => {
		onClick && onClick()

		if (!isCurrentPage) {
			router.push(page)
			setTimeout(() => scrollTo(), 500)
		} else {
			scrollTo()
		}
	}

	const scrollTo = () => {
		const element = document.getElementById(href)

		if (element) {
			const position = element.getBoundingClientRect().top
			const offsetPosition = window.pageYOffset + position + offset

			window.scrollTo({
				top: offsetPosition,
				behavior: smooth ? 'smooth' : 'auto'
			})
		}
	}

	return (
		<a
			onClick={href ? routerChange : onClick}
			{...rest}
		>
			{children}
		</a>
	)
}

AnchorLink.defaultProps = {
	page: '/',
	offset: -50
}

AnchorLink.propTypes = {
	href: PropTypes.string,
	page: PropTypes.string,
	offset: PropTypes.number,
	smooth: PropTypes.bool,
	onClick: PropTypes.func
}

export default AnchorLink
