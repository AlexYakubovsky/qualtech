import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'styles/globals.scss'

export default function App({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<ToastContainer />
		</>
	)
}
