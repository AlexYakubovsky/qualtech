import React from 'react'
import PropTypes from 'prop-types'
import Text from '../text/Text'
import s from './style.module.scss'

const FormLabel = ({
	label,
	required,
	color,
	size
}) => {
	return (
		<>
			{label && (
				<Text
					className={s['label']}
					required={required}
					color={color}
					size={size}
				>
					{label}
				</Text>
			)}
		</>
	)
}

FormLabel.propTypes = {
	label: PropTypes.string,
	required: PropTypes.bool,
	color: PropTypes.string,
	size: PropTypes.string
}

export default FormLabel
