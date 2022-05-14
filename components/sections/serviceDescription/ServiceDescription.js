import React from 'react'
import cn from 'classnames'
import useWindowSize from 'hooks/useWindowSize'
import { Section, Container, Row, Col, Text, Screen, ColorfulBackground } from 'components/ui'
import s from './service-description.module.scss'

const ServiceDescription = () => {
	const { deviceWidth } = useWindowSize()

	const FullCycle = () => (
		<div className={cn(s['service-description'], s['full-cycle'])}>
			<Text as='p' className={s['service-description__title']}>Полный цикл услуг</Text>
			<div className={s['service-description__text']}>
				<Text as='p' size='xs' color='black'>
					Предоставляем полный цикл услуг по созданию сайтов: проектирование, разработка мобильного и
					адаптивного дизайна, интеграция с 1С, Битрикс, внедрение различных внешних систем.
				</Text>
				<Text as='p' size='xs' color='black'>
					Все наши сайты адаптивные, со встроенным алгоритмом распознающим устройство и подстраивающим под
					него
					необходимый дизайн в точно рассчитанной конфигурации
				</Text>
				<Text as='p' size='xs' color='black'>
					Сегодня сайт в немалой степени определяет статус компании, наличие собственного многофункционального
					сайта стало необходимостью для всех.
				</Text>
				<Text as='p' size='xs' color='black'>
					Мы подберем правильные решения для вас и пользователей.
				</Text>
				<Text as='p' size='xs' color='black'>
					Реализуйте вместе с нами самые смелые и сложные идеи!
				</Text>
			</div>
		</div>
	)

	return (
		<Section colorfulBackground>
			<Container>
				<div className={s['service-description-wrapper']}>
					<Row row={deviceWidth === 'medium' ? 40 : 15} align='center'>
						<Col sm={9} md={8} lg={6} xl={5}>
							<div className={s['service-description']}>
								<Text as='p' className={s['service-description__title']}>Разработка сайта любого типа и сложности</Text>
								<div className={s['service-description__text']}>
									<Text as='p' size='xs' color='black'>
										Есть только один шанс произвести хорошее впечатление на пользователя. Мы принимаем решение нравится
										нам сайт или нет всего за 10 секунд. Поэтому удобство и качество ресурса напрямую влияют на
										количество
										онлайн&#8209;продаж. Важно поддерживать внимание аудитории, поэтому мы тщательно продумываем
										структуру
										сайта, дизайн и контент. В результате сайт способен значительно увеличить поток клиентов.
									</Text>
								</div>
							</div>
							<Screen size='lg'>
								<FullCycle />
							</Screen>
						</Col>
						<Screen size='sm' down>
							<Col xs={12}>
								<div className={cn(s.ticker, s['mobile-top'])}>
									<Text as='p'>Разработка сайтов</Text>
								</div>
							</Col>
						</Screen>
						<Col sm={10} offset-sm={1} md={9} lg={5} offset-xl={2}>
							<div className={s['service-description']}>
								<Text as='p' className={s['service-description__title']}>Что входит в комплексный подход:</Text>
								<ul className={cn(s['service-description__text'], 'list-style')}>
									<Text as='li' size='xs' color='black'>
										Проект, который решит поставленные бизнес&#8209;задачи с учетом особенностей ниши и
										пользовательского
										опыта.
									</Text>
									<Text as='li' size='xs' color='black'>
										Адаптивный дизайн. Мы создаем по&#8209;настоящему уникальные дизайны на мировом уровне, а не на
										уровне
										других сайтов в топе выдачи.
									</Text>
									<Text as='li' size='xs' color='black'>
										Расширенные возможности: стабильная работа при большом количестве информации, возможность
										подключения дополнительных сервисов и передачи данных между разными системами.
									</Text>
									<Text as='li' size='xs' color='black'>
										Продвижение сайта: увеличение конверсии, грамотная оптимизация под поисковые системы Яндекс и
										Google, генерация лидов.
									</Text>
									<Text as='li' size='xs' color='black'>
										Функционал любой сложности
									</Text>
									<Text as='li' size='xs' color='black'>
										Все наши сайты адаптивные, со встроенным алгоритмом распознающим устройство и подстраивающим под
										него необходимый дизайн в точно рассчитанной конфигурации
									</Text>
								</ul>
							</div>
						</Col>
						<Screen size='sm' down>
							<Col xs={12}>
								<div className={cn(s.ticker, s['mobile-bottom'])}>
									<Text as='p'>Разработка сайтов</Text>
								</div>
							</Col>
						</Screen>
						<Screen size='lg' down>
							<Col sm={9} md={8} xs={12}>
								<FullCycle />
							</Col>
						</Screen>
					</Row>
					<Screen size='sm'>
						<div className={s.ticker}>
							<Text as='p'>Разработка сайтов</Text>
						</div>
					</Screen>
				</div>
			</Container>

			<Screen size='sm'>
				<ColorfulBackground className={s.colorful} />
			</Screen>
		</Section>
	)
}

export default ServiceDescription
