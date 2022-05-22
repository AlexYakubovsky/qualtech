import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon/Icon'
import s from './style.module.scss'

const Prefix = ({ icon }) => {
	return (
		<>
			{icon && (
				<span className={s.prefix}>
					<Icon name={icon} />
				</span>
			)}
		</>
	)
}

Prefix.propTypes = {
	icon: PropTypes.string
}

export default Prefix
