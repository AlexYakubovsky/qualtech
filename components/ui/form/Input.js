import React, { useRef, useState, forwardRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import IMask from 'imask'
import cx from 'classnames'
import FormLabel from './FormLabel'
import FormError from './FormError'
import Prefix from './Prefix'
import Suffix from './Suffix'
import Icon from '../icon/Icon'
import s from './style.module.scss'

const Input = forwardRef(
	(
		{
			id,
			name,
			className,
			classNameInputWrapper,
			style,
			type,
			onChange,
			defaultValue,
			value,
			label,
			labelSize,
			placeholder,
			disabled,
			required,
			autoComplete,
			register,
			rules,
			errors,
			suffix,
			prefix,
			togglePassword,
			fluid,
			textCenter,
			view,
			...rest
		},
		ref
	) => {
		const excludeTypes = ['checkbox', 'radio', 'file', 'color', 'range', 'hidden']
		const inputRef = useRef(null)
		const [inputType, setInputType] = useState(type)
		const [validation, setValidation] = useState(null)
		const [isRequired, setIsRequired] = useState(false)

		const formInputWrapperClassList = cx(
			s['form-input-wrapper'],
			s[type],
			{
				[s['view-' + view]]: view,
				[s['error']]: errors?.[name],
				[s['fluid']]: fluid
			},
			classNameInputWrapper
		)

		const inputClassList = cx(
			s['input'],
			{
				[s['prefix']]: prefix,
				[s['suffix']]: suffix,
				[s['password']]: togglePassword,
				[s['text-center']]: textCenter
			},
			className
		)

		useEffect(() => {
			setValidation(register ? { ...register(name, rules) } : null)
			setIsRequired(required || rules?.required?.value)

			if (inputType === 'tel' && inputRef.current) {
				const currentInput = inputRef.current.firstChild
				const numberMask = IMask(currentInput, {
					mask: '+{7} (000) 000-00-00'
				})

				// currentInput.addEventListener('focus', () => {
				// 	numberMask.updateOptions({ lazy: false })
				// })
				//
				// currentInput.addEventListener('blur', () => {
				// 	numberMask.updateOptions({ lazy: true })
				// 	// if (!numberMask.masked.rawInputValue) numberMask.value = ''
				// })

				setValidation(
					register
						? {
							...register(name, {
								...rules,
								pattern: {
									value: /\+\d{1}[\- ]?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}$/,
									message: 'Неверный номер телефона'
								}
							})
						}
						: null
				)
			}
			if (inputType === 'email' && inputRef.current) {
				setValidation(
					register
						? {
							...register(name, {
								...rules,
								pattern: {
									value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}$/,
									message:
										'Электронная почта не является действительной электронной почтой'
								}
							})
						}
						: null
				)
			}
		}, [])

		const TogglePassword = () => {
			const togglePasswordHandler = () => {
				if (inputType === 'text') {
					setInputType('password')
				} else {
					setInputType('text')
				}
			}

			return (
				<>
					{togglePassword && (
						<span className={s['toggle-password']} onClick={togglePasswordHandler}>
							{inputType === 'password' && <Icon name='eye' />}
							{inputType === 'text' && <Icon name='eye-off' />}
						</span>
					)}
				</>
			)
		}

		return (
			<label
				ref={ref}
				htmlFor={id}
				className={formInputWrapperClassList}
			>
				<FormLabel
					label={label}
					required={isRequired}
					size={labelSize}
				/>
				<div className={s['input-container']} ref={inputRef}>
					<input
						id={id}
						name={name}
						className={inputClassList}
						style={style}
						type={inputType}
						onChange={onChange}
						defaultValue={defaultValue}
						value={value}
						placeholder={placeholder}
						disabled={disabled}
						autoComplete={autoComplete}
						{...validation}
						{...rest}
					/>
					{!excludeTypes.includes(type) && <Prefix icon={prefix} />}
					{!excludeTypes.includes(type) && (suffix || togglePassword) && (
						<Suffix suffix={suffix}>
							<TogglePassword />
						</Suffix>
					)}
				</div>
				<FormError message={errors?.[name]?.message} />
			</label>
		)
	}
)

Input.defaultProps = {
	type: 'text',
	view: 'primary',
	labelSize: 'lg'
}

Input.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string.isRequired,
	className: PropTypes.string,
	classNameInputWrapper: PropTypes.string,
	style: PropTypes.object,
	type: PropTypes.oneOf([
		'button',
		'color',
		'date',
		'datetime-local',
		'email',
		'file',
		'hidden',
		'image',
		'month',
		'number',
		'password',
		'range',
		'reset',
		'search',
		'submit',
		'tel',
		'text',
		'time',
		'url',
		'week'
	]),
	onChange: PropTypes.func,
	defaultValue: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.bool,
		PropTypes.object
	]),
	value: PropTypes.any,
	label: PropTypes.string,
	labelSize: PropTypes.string,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	required: PropTypes.bool,
	autoComplete: PropTypes.string,
	register: PropTypes.func,
	rules: PropTypes.object,
	errors: PropTypes.object,
	suffix: PropTypes.string,
	prefix: PropTypes.string,
	togglePassword: PropTypes.bool,
	fluid: PropTypes.bool,
	textCenter: PropTypes.bool,
	view: PropTypes.oneOf(['primary', 'secondary'])
}

export default Input
