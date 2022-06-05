import Head from 'next/head'
import { Header } from './header'
import { Footer } from './footer'

export default function Layout({
	children
}) {
	return (
		<>
			<Head>
				<title>qualtech</title>
				<link rel='icon' href='/favicon.png' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
				/>
			</Head>
			<Header />
			<main>
				{children}
			</main>
			<Footer />
		</>
	)
}
