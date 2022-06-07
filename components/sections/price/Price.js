import React from 'react'
import Image from 'next/image'
import useWindowSize from 'hooks/useWindowSize'
import { Container, Row, Section, Col, Text, FadeIn } from 'components/ui'
import s from './price.module.scss'

const Price = () => {
	const { deviceWidth } = useWindowSize()

	const prices = [
		{
			name: 'Лендинг',
			time: 'Срок реализации 3 недели',
			cost: 'от 120 000 ₽',
			img: '/images/sections/price/0.svg'
		},
		{
			name: 'Портал',
			time: 'Срок реализации от 6 месяцев',
			cost: 'от 500 000 ₽',
			img: '/images/sections/price/1.svg'
		},
		{
			name: 'Каталог',
			time: 'Срок реализации 6 недель',
			cost: 'от 180 000 ₽',
			img: '/images/sections/price/2.svg'
		},
		{
			name: 'Интернет-магазин',
			time: 'Срок реализации от 3 месяцев',
			cost: 'от 300 000 ₽',
			img: '/images/sections/price/3.svg'
		},
		{
			name: 'Сайт-визитка',
			time: 'Срок реализации 5 недель',
			cost: 'от 150 000 ₽',
			img: '/images/sections/price/4.svg'
		},
		{
			name: 'Приложение',
			time: 'Срок реализации индивидуальный',
			cost: 'Индивидуально',
			img: '/images/sections/price/5.svg'
		},
		{
			name: 'Тех. поддержка',
			time: 'Ежемесячно',
			cost: 'от 20 000 ₽',
			img: '/images/sections/price/6.svg'
		},
		{
			name: 'Продвижение',
			time: 'Ежемесячно',
			cost: 'от 40 000 ₽',
			img: '/images/sections/price/7.svg'
		}
	]

	const firstPart = prices.slice(0, Math.round(prices.length / 2))
	const lastPart = prices.slice(Math.round(prices.length / 2), prices.length)

	const PriceItem = ({ name, time, cost, img }) => (
		<FadeIn
			className={s['service-price-item']}
			isActive={deviceWidth === 'large'}
			y={0}
		>
			<Text
				as='h6'
				className={s['service-price-item__title']}
			>
				{name}
			</Text>
			<Text
				size='md'
				className={s['service-price-item__time']}
			>
				{time}
			</Text>
			<Text
				size='lg'
				color='green'
				weight='bold'
				className={s['service-price-item__cost']}
			>
				{cost}
			</Text>
			<FadeIn
				className={s['service-price-item__img']}
				y={0}
				once={false}
			>
				<Image
					src={img}
					layout='fill'
					objectFit='cover'
					quality='100'
					alt=''
				/>
			</FadeIn>
		</FadeIn>
	)

	return (
		<Section id='#price'>
			<Container>
				<Text as='h2'>Стоимость услуг</Text>
				<Row row={deviceWidth === 'small' ? 15 : 20} className='offset-top-40 offset-sm-top-50 offset-xl-top-70'>
					<Col md={6}>
						{firstPart.map((price, i) => (
							<PriceItem
								key={i}
								index={i}
								name={price.name}
								time={price.time}
								cost={price.cost}
								img={price.img}
							/>
						))}
					</Col>
					<Col md={6}>
						{lastPart.map((price, i) => (
							<PriceItem
								key={i}
								index={i + firstPart.length}
								name={price.name}
								time={price.time}
								cost={price.cost}
								img={price.img}
							/>
						))}
					</Col>
				</Row>
			</Container>
		</Section>
	)
}

export default Price
