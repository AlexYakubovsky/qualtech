import React from 'react'
import Image from 'next/image'
import useWindowsSize from 'hooks/useWindowSize'
import AnchorLink from 'components/utils/AnchorLink'
import { Container, Section, Row, Col, Text } from 'components/ui'
import s from './footer.module.scss'

const Footer = () => {
	const { deviceWidth } = useWindowsSize()
	const year = new Date().getFullYear()

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
								</div>
							</Col>
							<Col sm={6} lg={9} order-sm={2} order-lg={1}>
								<ul className={s['footer__menu']}>
									<Text as='li' className={s['menu-item']}>
										<AnchorLink to='#our-services' smooth>
											<Text color='gray' transform='uppercase' weight='bold'>Наши услуги</Text>
										</AnchorLink>
									</Text>
									<Text as='li' className={s['menu-item']}>
										<AnchorLink to='#price' smooth>
											<Text color='gray' transform='uppercase' weight='bold'>Стоимость услуг</Text>
										</AnchorLink>
									</Text>
									<Text as='li' className={s['menu-item']}>
										<AnchorLink to='#how-we-work' smooth>
											<Text color='gray' transform='uppercase' weight='bold'>Как мы работаем</Text>
										</AnchorLink>
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
						<Text as='p' size='xs' color='dark-gray'>© {year} qualtech</Text>
					</div>
				</Container>
			</Section>
		</footer>
	)
}

export default Footer
