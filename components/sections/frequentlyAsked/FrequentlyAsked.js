import React from 'react'
import { Section, Container, Text, Row, Col, Collapse, Screen } from 'components/ui'
import s from './frequently-asked.module.scss'

const FrequentlyAsked = () => {
	const faq = [
		{
			question: 'Как долго вы разрабатываете сложноразрабатываемый сайт?',
			answer: 'Если сайт очень сложный и сложноразрабатываемый — мы будем разрабатывать его очень тщательно и очень долго.  Но сайт будет очень качественный.'
		},
		{
			question: 'Как долго вы разрабатываете сложноразрабатываемый сайт',
			answer: 'Если сайт очень сложный и сложноразрабатываемый — мы будем разрабатывать его очень тщательно и очень долго.  Но сайт будет очень качественный.'
		},
		{
			question: 'вопрос',
			answer: 'ответ'
		},
		{
			question: 'вопрос',
			answer: 'ответ'
		},
		{
			question: 'вопрос',
			answer: 'ответ'
		},
		{
			question: 'вопрос',
			answer: 'ответ'
		}
	]

	const firstPart = faq.slice(0, Math.round(faq.length / 2))
	const lastPart = faq.slice(Math.round(faq.length / 2), faq.length)

	return (
		<Section>
			<Container>
				<div className={s['frequently-asked']}>
					<Text as='h2' className={s['frequently-asked__title']}>Часто задаваемые вопросы</Text>
					<Row className='offset-top-40 offset-sm-top-50 offset-xl-top-70'>
						<Screen size='md'>
							<Col md={6}>
								<Collapse>
									{firstPart.map((faq, i) => (
										<Collapse.Panel
											key={i}
											index={i}
											label={faq.question}
										>
											<Text as='p' size='md'>{faq.answer}</Text>
										</Collapse.Panel>
									))}
								</Collapse>
							</Col>
							<Col md={6}>
								<Collapse>
									{lastPart.map((faq, i) => (
										<Collapse.Panel
											key={i}
											index={i}
											label={faq.question}
										>
											<Text as='p' size='md'>{faq.answer}</Text>
										</Collapse.Panel>
									))}
								</Collapse>
							</Col>
						</Screen>
						<Screen size='md' down>
							<Col xs={12}>
								<Collapse>
									{faq.map((faq, i) => (
										<Collapse.Panel
											key={i}
											index={i}
											label={faq.question}
										>
											<Text as='p' size='md'>{faq.answer}</Text>
										</Collapse.Panel>
									))}
								</Collapse>
							</Col>
						</Screen>
					</Row>
				</div>
			</Container>
		</Section>
	)
}

export default FrequentlyAsked
