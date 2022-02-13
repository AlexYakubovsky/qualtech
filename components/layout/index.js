import Head from 'next/head'
import Header from '@/components/layout/header/Header'

export default function Layout({
	children,
}) {
	const styles = {
		marginLeft: '0'
	}

	return (
		<>
			<Head>
				<title>Управление магазином</title>
				<link rel="icon" href="/favicon.png" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
				/>
			</Head>
			<Header />
			<main style={styles}>
					{children}
			</main>
			{/*<Footer />*/}
		</>
	)
}