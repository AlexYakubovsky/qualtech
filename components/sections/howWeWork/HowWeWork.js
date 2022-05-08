import React from 'react'
import Step from './Step'
import { Section, Container, Text, Lottie } from 'components/ui'
import cn from 'classnames'
import img from 'images/backgrounds/2.png'
import s from './how-we-work.module.scss'

export default function HowWeWork() {
	return (
		<Section
			backgroundImg={img.src}
			style={{
				backgroundRepeat: 'repeat',
				backgroundSize: 'auto',
				paddingTop: 200
			}}
		>
			<Container>
				<Text as='h2'
					//delete
							style={{ fontSize: 96, lineHeight: '96px', letterSpacing: '0.045em' }}
				>Как мы работаем</Text>
				<div className={s['how-we-work']}>
					<Step
						title='Обсуждение'
						description='Мы детально обсуждаем условия работы, определяем предварительный функционал для MVP, подписываем договор, NDA и начинаем работы'
						stepNumber='1'
						square='fill'
						squareColor='violet'
						animationsImg={['animations/message.json']}
					/>
					<Step
						title='Предпроектная подготовка'
						description='Разрабатываем карту проекта, интерактивный прототип, детально демонстрирующий структуру и функционал проекта, формируем ТЗ'
						stepNumber='2'
						square='dashed'
						animationsImg={['animations/pen.json']}
					/>
					{/*<div className={cn(s.step, s['step-from-3-to-4'])}>*/}
					{/*	<Lottie*/}
					{/*		path='animations/gear.json'*/}
					{/*		className={s['animation-img']}*/}
					{/*	/>*/}
					{/*</div>*/}
					<Step
						title='Разработка'
						description='Разработка проекта на основе гибких методологий, небольшими итерациями, применяя современные технологий и правильную архитектуру для готовности к нагрузкам и будущему масштабированию'
						stepNumber='3'
						square='fill'
						squareColor='green'
						animationsImg={['animations/arrow-left.json', 'animations/gear.json']}
						svgLine={
							<svg width='260' height='500'>
								<linearGradient id='linearColors' x1='0' y1='0' x2='0' y2='1'>
									<stop offset='5%' stopColor='#8cc0fc' />
									<stop offset='25%' stopColor='#77bff7' />
									<stop offset='40%' stopColor='#42bae4' />
									<stop offset='60%' stopColor='#00b2c4' />
									<stop offset='80%' stopColor='#00a9a3' />
									<stop offset='100%' stopColor='#0ca594' />
								</linearGradient>
								<path d='M 0 7 A 180 176 0 0 1 0 493' stroke='url(#linearColors)' fill='none' strokeWidth='15' />
							</svg>
						}
					/>
					<Step
						title='Тестирование'
						description='Тестируем работу первой версии. Основные возможности системы покрываются автоматическими тестами, код проходит проверку на наши внутренние стандарты качества, вносятся необходимые изменения'
						stepNumber='4'
						square='fill'
						squareColor='pink'
						animationsImg={['animations/arrow-right.json']}
						svgLine={
							<svg width='260' height='500'>
								<linearGradient id='linearColors2' x1='0' y1='0' x2='0' y2='1'>
									<stop offset='5%' stopColor='#81cf80' />
									<stop offset='25%' stopColor='#98c972' />
									<stop offset='40%' stopColor='#c2b860' />
									<stop offset='60%' stopColor='#e2a26a' />
									<stop offset='80%' stopColor='#eb9482' />
									<stop offset='100%' stopColor='#ea908e' />
								</linearGradient>
								<path d='M 260 493 A 180 176 180 0 1 260 7' stroke='url(#linearColors2)' fill='none' strokeWidth='15' />
							</svg>
						}
					/>
					<Step
						title='Запуск'
						description='После окончания всех запланированных работ происходит запуск MVP. Мы держим руку на пульсе и оказываем оперативную техническую поддержку'
						stepNumber='5'
						square='dashed'
						animationsImg={['animations/like.json']}
					/>
				</div>

			</Container>
		</Section>
	)
}
