import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { links } from 'constants/contacts'
import { useHttp } from 'hooks/useHttp'
import { useToastify } from 'hooks/useToastify'
import { Button, Input, Text, Textarea } from 'components/ui'
import s from './modals.module.scss'

const LeaveRequestModal = ({ requestFrom, onAfterSuccess }) => {
	const { register, handleSubmit, reset, formState: { errors } } = useForm()
	const { request, loading, requestErrors } = useHttp()

	useEffect(() => {
		useToastify(requestErrors)
	}, [requestErrors, useToastify])

	const onSubmit = async (data) => {
		try {
			const body = { ...data, from: requestFrom }
			const response = await request('/api/feedback', 'POST', body, {
				'Accept': 'application/json, text/plain, */*'
			})

			if (!response) throw new Error()

			useToastify(response.message)
			reset()

			if (onAfterSuccess) onAfterSuccess()
		} catch {
			useToastify(requestErrors)
		}
	}

	return (
		<div className={s['leave-request-modal']}>
			<Text as='h6' color='black'>Оставьте заявку</Text>
			<Text
				size='md'
				color='black'
				className='offset-top-10'
			>
				Мы свяжемся с вами в ближайшее время для уточнения деталей по проекту
			</Text>
			<form onSubmit={handleSubmit(onSubmit)} className={s.form}>
				<Input
					id='name'
					name='name'
					label='Ваше имя'
					view='secondary'
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
					view='secondary'
					classNameInputWrapper='offset-top-10 offset-sm-top-15'
					register={register}
					rules={{ required: { value: true, message: 'Поле обязательное' } }}
					errors={errors}
					fluid
				/>
				<Textarea
					id='message'
					name='message'
					className={s.textarea}
					label='Сообщение'
					view='secondary'
					classNameInputWrapper='offset-top-10 offset-sm-top-15'
					register={register}
					rules={{ required: { value: true, message: 'Поле обязательное' } }}
					errors={errors}
					fluid
				/>
				<div className={s['submit']}>
					<Button
						type='submit'
						disabled={loading}
						fluid
					>
						Оставить заявку
					</Button>
					<Text as='p' className={s['policy-agree']}>
						Нажимая кнопку «Отправить заявку»‎, вы автоматически соглашаетесь с&thinsp;
						<Text as='a' href={links.privacy} decoration='underline' target='_blank'>политикой
							конфиденциальности</Text> и даете свое согласие на обработку персональных данных.
					</Text>
				</div>
			</form>
		</div>
	)
}

LeaveRequestModal.propTypes = {
	requestFrom: PropTypes.string.isRequired,
	onAfterSuccess: PropTypes.func
}

export default LeaveRequestModal
