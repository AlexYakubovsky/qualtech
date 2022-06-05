import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { Button, Input, Text, Textarea } from 'components/ui'
import s from './modals.module.scss'

const LeaveRequestModal = ({ requestFrom }) => {
	const { register, handleSubmit, formState: { errors } } = useForm()

	const onSubmit = data => {
		console.log(requestFrom)
		console.log(data)
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
					id='name-modal'
					name='name-modal'
					label='Ваше имя'
					view='secondary'
					register={register}
					rules={{ required: { value: true, message: 'Поле обязательное' } }}
					errors={errors}
					fluid
				/>
				<Input
					type='tel'
					id='phone-modal'
					name='phone-modal'
					label='Телефон'
					view='secondary'
					classNameInputWrapper='offset-top-10 offset-sm-top-15'
					register={register}
					rules={{ required: { value: true, message: 'Поле обязательное' } }}
					errors={errors}
					fluid
				/>
				<Textarea
					id='message-modal'
					name='message-modal'
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
					<Button type='submit' fluid>Оставить заявку</Button>
					<Text as='p' className={s['policy-agree']}>Нажимая кнопку «Отправить заявку»‎, вы автоматически
						соглашаетесь с <Text decoration='underline' cursor='pointer'> политикой конфиденциальности </Text>
						и даете свое согласие на обработку персональных данных.</Text>
				</div>
			</form>
		</div>
	)
}

LeaveRequestModal.propTypes = {
	requestFrom: PropTypes.string.isRequired
}

export default LeaveRequestModal
