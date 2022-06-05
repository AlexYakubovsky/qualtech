import React, { useRef, forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import FormLabel from './FormLabel'
import FormError from './FormError'
import s from './style.module.scss'

const Textarea = forwardRef(
	(
		{
			id,
			name,
			className,
			classNameInputWrapper,
			style,
			onChange,
			defaultValue,
			value,
			label,
			labelSize,
			placeholder,
			disabled,
			required,
			register,
			rules,
			errors,
			fluid,
			view,
			...rest
		},
		ref
	) => {
		const inputRef = useRef(null)
		const validation = register ? { ...register(name, { required, ...rules }) } : null
		const isRequired = required || rules?.required?.value

		const formInputWrapperClassList = cx(
			s['form-input-wrapper'],
			{
				[s['view-' + view]]: view,
				[s['error']]: errors?.[name],
				[s['fluid']]: fluid
			},
			classNameInputWrapper
		)

		const textareaClassList = cx(
			s['input'],
			s['textarea'],
			className
		)

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
					<textarea
						id={id}
						name={name}
						className={textareaClassList}
						onChange={onChange}
						defaultValue={defaultValue}
						value={value}
						placeholder={placeholder}
						disabled={disabled}
						{...validation}
						{...rest}
					/>
				</div>
				<FormError message={errors && errors[name] && errors[name].message} />
			</label>
		)
	}
)

Textarea.defaultProps = {
	view: 'primary',
	labelSize: 'lg'
}


Textarea.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string.isRequired,
	className: PropTypes.string,
	classNameInputWrapper: PropTypes.string,
	style: PropTypes.object,
	onChange: PropTypes.func,
	defaultValue: PropTypes.string,
	value: PropTypes.any,
	label: PropTypes.string,
	labelSize: PropTypes.string,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	required: PropTypes.bool,
	register: PropTypes.func,
	rules: PropTypes.object,
	errors: PropTypes.object,
	fluid: PropTypes.bool,
	view: PropTypes.oneOf(['primary', 'secondary'])
}

export default Textarea
