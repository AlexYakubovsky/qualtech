import React from 'react'
import PropTypes from 'prop-types'
import Text from '../text/Text'
import s from './style.module.scss'

const FormError = ({ message }) => {
	return (
		<>
			{message && (
				<Text color='danger' className={s['error-message']}>
					{message}
				</Text>
			)}
		</>
	)
}

FormError.propTypes = {
	message: PropTypes.string
}

export default FormError
