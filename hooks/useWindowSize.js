import { useState, useEffect } from 'react'
import useEvent from '@/hooks/useEvent'

const useWindowSize = () => {
	const [size, setSize] = useState('xxs')
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined
	})

	const sizes = {
		xxs: 0,
		xs: 375,
		sm: 576,
		md: 768,
		lg: 992,
		xl: 1200,
		xxl: 1400
	}

	const setCurrentSize = (width) => {
		if (sizes.xs <= width && width < sizes.sm) setSize('xs')
		else if (sizes.sm <= width && width < sizes.md) setSize('sm')
		else if (sizes.md <= width && width < sizes.lg) setSize('md')
		else if (sizes.lg <= width && width < sizes.xl) setSize('lg')
		else if (sizes.xl <= width && width < sizes.xxl) setSize('xl')
		else if (width >= sizes.xxl) setSize('xxl')
		else setSize('xxs')
	}

	const handleResize = () => {
		setWindowSize({ width: window.innerWidth, height: window.innerHeight })
		setCurrentSize(window.innerWidth)
	}

	useEffect(() => handleResize(), [])
	useEvent('resize', handleResize)

	return { ...windowSize, size }
}

export default useWindowSize
