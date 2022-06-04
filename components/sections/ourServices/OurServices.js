import React from 'react'
import useWindowSize from 'hooks/useWindowSize'
import { Section, Text, Button, Container, Row, Col, Screen, ColorfulBackground } from 'components/ui'
import ServiceItem from './ServiceItem'
import s from './our-services.module.scss'

export default function OurServices() {
	const { size, deviceWidth } = useWindowSize()

	return (
		<Section id='#our-services' backgroundColor='white'>
			<Container>
				<Row row={15} align='center'>
					<Col lg={5} xl={6} className='z-index-1'>
						<Text as='h2' color='black'>Наши услуги</Text>
						<Text as='p' size='xl' color='black' className='offset-top-15 offset-sm-top-30'>
							Мы предлагаем полный комплекс услуг для проектов любого уровня и любой стадии готовности — от начальной,
							когда есть лишь идея, нуждающаяся в разработке, создании инструментов и продвижении, до заключительной,
							когда ресурсу необходима только поддержка
						</Text>
						<Screen size='lg'>
							<Button view='secondary' className='offset-top-80'>Оставить заявку</Button>
						</Screen>
					</Col>
					<Col lg={7} xl={6} className='z-index-1'>
						<div className={s.services}>
							<Row row={deviceWidth === 'small' ? 20 : 40}>
								<ServiceItem
									index='0'
									title='Сайты всех типов'
									footer='Сильные бренды и яркие digital-проекты'
								>
									<ul className='list-style'>
										<Text as='li' size='sm'>Интернет-магазин</Text>
										<Text as='li' size='sm'>Корпоративный сайт</Text>
										<Text as='li' size='sm'>Каталог</Text>
										<Text as='li' size='sm'>Сайт-визитка</Text>
									</ul>
								</ServiceItem>
								<ServiceItem
									index='1'
									title='Порталы'
									footer='Интерактивные интернет-сервисы'
								>
									<Text as='p' size='sm' whiteSpace='pre-line' color='black'>
										{`Многофункциональная площадка, совмещающая разнонаправленные группы сервисов
									 или направлений деятельности, объединенных единой концепцией`}
									</Text>
								</ServiceItem>
								<ServiceItem
									index='2'
									title='Продвижение'
								>
									<ul className='list-style'>
										<Text as='li' size='sm'>Интегрированнная CRM, RPM, HRM, Asterisk, OTRS</Text>
										<Text as='li' size='sm'>Аналитический сервер Spark</Text>
										<Text as='li' size='sm'>Учёт и контроль рабочего времени</Text>
										<Text as='li' size='sm'>Сервер мониторинга видимости</Text>
										<Text as='li' size='sm'>Автоматическая система ключевых показателей</Text>
									</ul>
								</ServiceItem>
								<ServiceItem
									index='3'
									title='Приложения'
									footer='iOS и Android'
								>
									<ul className='list-style'>
										<Text as='li' size='sm'>Для молодых стартапов</Text>
										<Text as='li' size='sm'>Крупным корпорациям</Text>
										<Text as='li' size='sm'>Малому и среднему бизнесу</Text>
										<Text as='li' size='sm'>Digital-агенствам</Text>
									</ul>
								</ServiceItem>
							</Row>
						</div>
						<Screen size='lg' down>
							<Button
								view='secondary'
								className='offset-top-20'
								fluid={size !== 'md'}
							>
								Оставить заявку
							</Button>
						</Screen>
					</Col>
				</Row>
			</Container>

			<ColorfulBackground
				className={s.colorful}
				isActiveFade={deviceWidth === 'large'}
			/>
		</Section>
	)
}
