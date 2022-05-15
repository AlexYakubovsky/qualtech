import React from 'react'
import Panel from './Panel'
import s from './style.module.scss'

const Collapse = ({ children, ...rest }) => (
	<div className={s.accordion} {...rest}>
		{children}
	</div>
)

Collapse.Panel = Panel

export default Collapse
