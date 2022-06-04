import React, { useState, useEffect, useRef } from 'react'

export default function usePosition() {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)
	const ref = useRef()

	useEffect(() => {
		if (ref.current) {
			const position = ref.current.getBoundingClientRect()

			setX(window.scrollX + position.left)
			setY(window.scrollY + position.top)
		}
	}, [ref, setX, setY])

	return { ref, x, y }
}
