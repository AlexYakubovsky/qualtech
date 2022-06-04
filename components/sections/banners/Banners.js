import React from 'react'
import useWindowsSize from 'hooks/useWindowSize'
import { Section, Container, Row, Col, Carousel, SlideItem, Text, Button, Lottie, FadeIn } from 'components/ui'
import img from 'images/backgrounds/0.svg'
import s from './banners.module.scss'

export default function Banners() {
	const { deviceWidth } = useWindowsSize()
	const banners = [
		{
			title: 'Разработка сайтов любой сложности',
			text: `Мы разрабатываем сайты любого типа.\nОт лендинга до мультифункциональных информационных порталов`,
			subTitle: 'Разработка под ключ',
			button: 'Оставить заявку',
			lottie: '/animations/banner-1.json'
		},
		{
			title: 'Комплексный подход',
			text: `Аналитика | UX/UI | Front-end | Back-end\nПродвижение | Техническая поддержка`,
			subTitle: 'Международный формат',
			button: 'Оставить заявку',
			lottie: '/animations/banner-0.json'
		},
		{
			title: 'Разработка мобильных приложений',
			text: `Разработка приложений\nлюбой сложности`,
			subTitle: 'Взаимодействие Swift с JavaScript',
			button: 'Оставить заявку',
			lottie: '/animations/banner-2.json'
		}
	]

	return (
		<Section backgroundImg={img.src}>
			<Container>
				<FadeIn>
					<Carousel
						allowTouchMove={true}
						effect='fade'
						loop={true}
						speed={1400}
						pagination={deviceWidth !== 'small' && { clickable: true }}
						autoplay={{
							delay: 4500,
							disableOnInteraction: false
						}}
						classNameWrapper={s.banners}
					>
						{banners.map((banner, i) => (
							<SlideItem key={i}>
								<Row row={20} align='center'>
									<Col sm={6} order-sm={2}>
										<div className={s['banners__animation']}>
											<Lottie path={banner.lottie} style={{ display: 'flex' }} />
										</div>
									</Col>
									<Col sm={6} order-sm={1}>
										<div className={s['banners__text']}>
											<Text as='h1'>{banner.title}</Text>
											<Text as='p' className='offset-top-15 offset-sm-top-30' size='xl' whiteSpace='pre-line'>
												{banner.text}
											</Text>
											<Text as='p' className='offset-top-15 offset-sm-top-30' size='lg' color='green' weight='bold'>
												{banner.subTitle}
											</Text>
										</div>
										<Button
											size='lg'
											className='offset-top-15 offset-sm-top-50 offset-xl-top-80'
											fluid={deviceWidth === 'small'}
										>
											{banner.button}
										</Button>
									</Col>
								</Row>
							</SlideItem>
						))}
					</Carousel>
				</FadeIn>
			</Container>
		</Section>
	)
}
