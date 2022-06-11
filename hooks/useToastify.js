import React from 'react'
import { toast, Slide } from 'react-toastify'

export const useToastify = (value, type = '', params = {}) => {
	const defaultParams = {
		position: 'top-right',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		transition: Slide
	}

	let currentParams = defaultParams

	if (Object.keys(params).length) {
		const copyParams = JSON.parse(JSON.stringify(defaultParams))
		currentParams = ({ ...copyParams, ...params })
	}

	if (type) {
		return toast[type](value, currentParams)
	}

	return toast(value, currentParams)
}
