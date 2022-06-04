import React from 'react'
import Image from 'next/image'
import { Section, Container, Row, Col, Text, Lottie, FadeIn } from 'components/ui'
import s from './hard-project.module.scss'

const HardProject = () => {
	return (
		<Section>
			<Container>
				<div className={s['hard-project']}>
					<Row row={15}>
						<Col sm={4} xl={4} order-sm={2}>
							<div className={s['hard-project__images']}>
								<FadeIn className={s.cloud} y={20}>
									<Image
										src='/images/sections/hard-project/cloud.png'
										layout='fill'
										objectFit='cover'
										quality='100'
										alt=''
									/>
								</FadeIn>
								<FadeIn className={s.window} y={20} duration={1.25}>
									<Image
										src='/images/sections/hard-project/window.png'
										layout='fill'
										objectFit='cover'
										quality='100'
										alt=''
									/>
								</FadeIn>
								<FadeIn className={s.circle} y={20} duration={1.5}>
									<Image
										src='/images/sections/hard-project/circle.png'
										layout='fill'
										objectFit='cover'
										quality='100'
										alt=''
									/>
								</FadeIn>
								<div>
									{/*<Lottie path='animations/rocket.json' />*/}
								</div>
							</div>
						</Col>
						<Col sm={8} xl={8} order-sm={1}>
							<Text as='h3'>
								Если у вас очень
								<Text color='violet' weight='bold'> сложный имиджевый проект </Text>
							</Text>
							<Text as='h3'>
								или
								<Text color='violet' weight='bold'> тяжелая техническая часть, </Text>
								то все цены и сроки обсуждаются
								<Text color='violet' weight='bold'> индивидуально на личной встрече </Text>
							</Text>
							<Text as='h3'>
								или в
								<Text color='violet' weight='bold'> Zoom</Text>
							</Text>
							<div className={s['hard-project__description']}>
								<Text as='p' size='lg'>
									Затраты на его изготовление зависят от насыщенности интерфейса, набора инфоблоков и компонентов его
									технической части.
								</Text>
								<Text as='p' size='lg'>
									Цена сайтов различных видов не одинаковая. Разработка проекта для онлайн торговли (e-commerce) или
									официального веб сайта организации — разные маркетинговые и функциональные задачи, следовательно,
									стоимость сайта и бюджет, который потребуется на проектирование будут разные.
								</Text>
								<Text as='p' size='lg'>
									Ответить, сколько стоит создание сайта в Москве можно будет после проведения анализа требований,
									которые
									предъявляются к проекту.
								</Text>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
		</Section>
	)
}

export default HardProject
