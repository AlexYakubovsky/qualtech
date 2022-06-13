import React from 'react'
import Image from 'next/image'
import { contacts, links } from 'constants/contacts'
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
							<Col sm={3}>
								<div className={s['footer__company']}>
									<div className={s.logo}>
										<Image src='/images/logo.png' layout='fill' objectFit='cover' />
									</div>
								</div>
							</Col>
							<Col sm={6} lg={4} order-sm={2}>
								<ul className={s['footer__contacts']}>
									<li>
										<Text as='a' href={`mailto:${contacts.email}`} size='lg'>{contacts.email}</Text>
									</li>
									<li>
										<Text as='a' href={`tel:${contacts.number}`} size='md' className={s.number}>{contacts.number}</Text>
									</li>
								</ul>
							</Col>
							<Col sm={9} order-sm={1}>
								<ul className={s['footer__menu']}>
									<Text as='li' className={s['menu-item']}>
										<AnchorLink href='our-services' smooth>
											<Text
												color='gray'
												transform='uppercase'
												weight='bold'
												className={s['border-from-left-to-right']}
											>
												Наши услуги
											</Text>
										</AnchorLink>
									</Text>
									<Text as='li' className={s['menu-item']}>
										<AnchorLink href='price' smooth>
											<Text
												color='gray'
												transform='uppercase'
												weight='bold'
												className={s['border-from-left-to-right']}
											>
												Стоимость услуг
											</Text>
										</AnchorLink>
									</Text>
									<Text as='li' className={s['menu-item']}>
										<AnchorLink href='how-we-work' smooth>
											<Text
												color='gray'
												transform='uppercase'
												weight='bold'
												className={s['border-from-left-to-right']}
											>
												Как мы работаем
											</Text>
										</AnchorLink>
									</Text>
								</ul>
							</Col>
						</Row>
					</div>
					<div className={s.bottom}>
						<Text
							as='a'
							href={links.privacy}
							size='xs'
							color='gray'
							className={s['border-from-left-to-right']}
						>
							Политика конфиденциальности
						</Text>
						<Text
							as='p'
							size='xs'
							color='gray'
							className={s.year}
						>
							© {year} qualtech
						</Text>
					</div>
				</Container>
			</Section>
		</footer>
	)
}

export default Footer
