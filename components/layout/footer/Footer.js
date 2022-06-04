import React from 'react'
import Image from 'next/image'
import useWindowsSize from 'hooks/useWindowSize'
import AnchorLink from 'components/utils/AnchorLink'
import { Container, Section, Row, Col, Text } from 'components/ui'
import s from './footer.module.scss'

const Footer = () => {
	const { deviceWidth } = useWindowsSize()

	return (
		<footer className={s.footer}>
			<Section>
				<Container>
					<div className={s.top}>
						<Row row={deviceWidth === 'large' ? 20 : 30}>
							<Col sm={12} lg={3}>
								<div className={s['footer__company']}>
									<div className={s.logo}>
										<Image src='/images/logo.png' layout='fill' objectFit='cover' />
									</div>
									<Text color='gray' className={s.name}>Разработка сайтов</Text>
								</div>
							</Col>
							<Col sm={6} lg={9} order-sm={2} order-lg={1}>
								<ul className={s['footer__menu']}>
									<Text as='li' className={s['menu-item']}>
										<AnchorLink
											to='#our-services'
											title='Наши услуги'
											color='gray'
											transform='uppercase'
											weight='bold'
											smooth
										/>
									</Text>
									<Text as='li' className={s['menu-item']}>
										<AnchorLink
											to='#price'
											title='Стоимость услуг'
											color='gray'
											transform='uppercase'
											weight='bold'
											smooth
										/>
									</Text>
									<Text as='li' className={s['menu-item']}>
										<AnchorLink
											to='#how-we-work'
											title='Как мы работаем'
											color='gray'
											transform='uppercase'
											weight='bold'
											smooth
										/>
									</Text>
								</ul>
							</Col>
							<Col sm={6} lg={4} order-sm={1}>
								<ul>
									<Text as='li' size='xs' color='dark-gray'>Разработка любой сложности.</Text>
									<Text as='li' size='xs' color='dark-gray'>Аналитика | UX/UI | Front-end | Back-end</Text>
									<Text as='li' size='xs' color='dark-gray'>Продвижение | Техническая поддержка</Text>
								</ul>
							</Col>
						</Row>
					</div>
					<div className={s.bottom}>
						<Text as='p' size='xs' color='dark-gray'>© 2022 Разработка сайтов</Text>
					</div>
				</Container>
			</Section>
		</footer>
	)
}

export default Footer
