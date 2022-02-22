import { useState, useEffect } from 'react'

const useOverlay = () => {
	const [isActive, setIsActive] = useState(false)

	useEffect(() => {
		document.body.classList.add('overlay')
		return () => document.body.classList.remove('overlay')
	}, [])

	useEffect(() => {
		if (isActive) document.body.classList.add('active')
		return () => document.body.classList.remove('active')
	}, [isActive])


	return {
		isActive,
		handlerOverlay: setIsActive
	}
}

export default useOverlay
