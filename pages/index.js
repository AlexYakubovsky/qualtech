import React from 'react'
import Layout from 'components/layout'
import { Banners, OurServices, HowWeWork, Price, HardProject } from 'components/sections'

export default function Index() {
	return (
		<Layout>
			<Banners />
			<OurServices />
			<HowWeWork />
			<Price />
			<HardProject />
		</Layout>
	)
}
