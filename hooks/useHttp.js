import React, { useCallback, useState } from 'react'

export const useHttp = () => {
	const [loading, setLoading] = useState(false)
	const [errors, setErrors] = useState(null)

	const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
		setLoading(true)

		try {
			if (body) {
				body = JSON.stringify(body)
				headers['Content-Type'] = 'application/json'
			}

			const response = await fetch(url, { method, body, headers })
			const data = await response.json()

			if (!response.ok) {
				throw new Error(data.message || 'Что-то пошло не так')
			}

			setLoading(false)
			return data
		} catch (e) {
			setLoading(false)
			setErrors(e.message)
		}
	}, [])

	const clearError = useCallback(() => setErrors(null), [])

	return { loading, request, requestErrors: errors, clearError }
}
