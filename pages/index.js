import React from 'react'
import Layout from 'components/layout'
import { Banners, OurServices } from 'components/sections'

export default function Index() {
	return (
		<Layout>
			<Banners />
			<OurServices />
		</Layout>
	)
}
