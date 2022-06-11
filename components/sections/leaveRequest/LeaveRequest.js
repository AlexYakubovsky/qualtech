import React, { useEffect } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import useWindowsSize from '/hooks/useWindowSize'
import { useHttp } from 'hooks/useHttp'
import { useToastify } from 'hooks/useToastify'
import { Section, Container, Row, Col, Text, Input, Textarea, Button, FadeIn } from 'components/ui'
import s from './leave-request.module.scss'

const LeaveRequest = () => {
	const { register, handleSubmit, setValue, formState: { errors } } = useForm()
	const { deviceWidth } = useWindowsSize()
	const { request, loading, requestErrors } = useHttp()

	useEffect(() => {
		useToastify(requestErrors)
	}, [requestErrors, useToastify])

	const onSubmit = async (data) => {
		try {
			const body = { ...data, from: 'Нижняя форма' }
			const response = await request('/api/feedback', 'POST', body, {
				'Accept': 'application/json, text/plain, */*'
			})

			if (!response) throw new Error()

			useToastify(response.message)
			setValue('name', '')
			setValue('phone', '')
			setValue('message', '')
		} catch {
			useToastify(requestErrors)
		}
	}

	return (
		<Section id='#leave-request'>
			<Container>
				<Row row={15}>
					<Col sm={4} offset-sm={1} xl={5} order-sm={2}>
						<div className={s['leave-request__images']}>
							<FadeIn className={s.message} y={20}>
								<Image
									src='/images/sections/leave-request/message.png'
									layout='fill'
									objectFit='cover'
									quality='100'
									alt=''
								/>
							</FadeIn>
							<FadeIn className={s.button} y={20} duration={1.25}>
								<Image
									src='/images/sections/leave-request/button.png'
									layout='fill'
									objectFit='cover'
									quality='100'
									alt=''
								/>
							</FadeIn>
							<FadeIn className={s.plus} y={20} duration={1.5}>
								<Image
									src='/images/sections/leave-request/plus.png'
									layout='fill'
									objectFit='cover'
									quality='100'
									alt=''
								/>
							</FadeIn>
						</div>
					</Col>
					<Col sm={7} xl={6} order-sm={1}>
						<Text as='h2'>Оставьте заявку</Text>
						<Text as='p' size='xl' className='offset-top-15 offset-sm-top-30'>
							Мы свяжемся с вами в ближайшее время для уточнения деталей по проекту
						</Text>
					</Col>
					<Col xs={12} order-sm={3}>
						<form onSubmit={handleSubmit(onSubmit)} className={s['leave-request__form']}>
							<Row row={10}>
								<Col lg={6}>
									<Input
										id='name'
										name='name'
										label='Ваше имя'
										register={register}
										rules={{ required: { value: true, message: 'Поле обязательное' } }}
										errors={errors}
										fluid
									/>
									<Input
										type='tel'
										id='phone'
										name='phone'
										label='Телефон'
										classNameInputWrapper='offset-top-10'
										register={register}
										rules={{ required: { value: true, message: 'Поле обязательное' } }}
										errors={errors}
										fluid
									/>
								</Col>
								<Col lg={6}>
									<Textarea
										id='message'
										name='message'
										className={s.textarea}
										label='Сообщение'
										register={register}
										rules={{ required: { value: true, message: 'Поле обязательное' } }}
										errors={errors}
										fluid
									/>
								</Col>
								<Col xs={12}>
									<div className={s['submit']}>
										<Button
											type='submit'
											fluid={deviceWidth === 'small'}
											disabled={loading}
										>
											Оставить заявку
										</Button>
										<Text as='p' className={s['policy-agree']}>Нажимая кнопку «Отправить заявку»‎, вы автоматически
											соглашаетесь с <Text decoration='underline' cursor='pointer'> политикой конфиденциальности </Text>
											и даете свое согласие на обработку персональных данных.</Text>
									</div>
								</Col>
							</Row>
						</form>
					</Col>
				</Row>
			</Container>
		</Section>
	)
}

export default LeaveRequest
