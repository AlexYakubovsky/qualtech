import React from 'react'
import Image from 'next/image'
import { Section, Container, Row, Col, Text, Lottie, FadeIn } from 'components/ui'
import s from './complex-approach.module.scss'

const ComplexApproach = () => {
	return (
		<Section className='z-index-1'>
			<Container>
				<FadeIn className={s['complex-approach']}>
					<Row row={15} align='center'>
						<Col sm={5} order-sm={2}>
							<div className={s['complex-approach__img']}>
								<div className={s.window}>
									<Image
										src='/images/sections/complex-approach/window.png'
										width='525'
										height='450'
										quality='100'
										alt=''
									/>
								</div>
								<div className={s.fire}>
									<Lottie path='animations/fire.json' />
								</div>
							</div>
						</Col>
						<Col sm={7} order-sm={1}>
							<div className={s['complex-approach__text']}>
								<Text as='h2' color='black'>Комплексный подход</Text>
								<Text as='p' size='xl' color='black' className='offset-top-15 offset-sm-top-30'>
									Мы предлагаем полный пакет услуг, начиная с разработки бизнес-идеи и заканчивая ведением сайта.
								</Text>
								<Text as='p' size='xl' color='black'>
									Для нас важен долгосрочный результат и постоянный рост.
								</Text>
								<Text as='p' size='lg' color='green' weight='bold' className={s['annual-contracts']}>
									Умеем работать в рамках годовых контрактов
								</Text>
							</div>
						</Col>
					</Row>
				</FadeIn>
			</Container>
		</Section>
	)
}

export default ComplexApproach
