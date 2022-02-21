import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function ActiveLink({ children, withHeaderNav, ...props }) {
	const router = useRouter()
	const [isMatchedLink, setMatchedLink] = useState(false)

	useEffect(() => {
		if (router.pathname === props.href || withHeaderNav) {
			setMatchedLink(true)
		}

		return () => setMatchedLink(false)
	}, [router.pathname, props.href, withHeaderNav])

	let className = props.className || ''

	if (isMatchedLink && props.activeClassName) {
		className = `${className} ${props.activeClassName}`.trim()
	}

	return (
		<Link {...props}>{React.cloneElement(children, { className })}</Link>
	)
}