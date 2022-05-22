import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon/Icon'
import s from './style.module.scss'

const Suffix = ({ children, suffix }) => (
	<span className={s['suffix']}>
		{children}
		{suffix && <Icon name={suffix} />}
	</span>
)

Suffix.propTypes = {
	children: PropTypes.element,
	suffix: PropTypes.string
}

export default Suffix
