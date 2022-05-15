import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import useDebounce from 'hooks/useDebounce'
import useWindowSize from 'hooks/useWindowSize'
import { Icon, Text } from 'components/ui'
import s from './style.module.scss'

const Panel = ({
	children,
	index,
	label,
	defaultActiveTab,
	disabled,
	animated,
	icon
}) => {
	const { width } = useWindowSize()
	const deboncedWidth = useDebounce(width, 500)
	const [height, setHeight] = useState(0)
	const [activeTab, setActiveTab] = useState(defaultActiveTab)
	const isActive = activeTab === index
	const panelRef = useRef(null)
	const contentRef = useRef(null)

	useEffect(() => {
		const height = contentRef.current.lastChild.clientHeight
		setHeight(height)
	}, [isActive, deboncedWidth])

	const innerStyle = {
		height: `${isActive ? height : 0}px`
	}

	const activateTab = (tab) => {
		setActiveTab(activeTab === tab ? -1 : tab)
	}

	return (
		<div
			role='tabpanel'
			className={s.panel}
			aria-expanded={isActive}
			ref={panelRef}
		>
			<button
				role='tab'
				className={s.panel__label}
				onClick={() => activateTab(index)}
				disabled={disabled}
			>
				<Text size='lg' weight='bold'>{label}</Text>
				<div className={s['icon-wrapper']}>
					{icon
						? <Icon size='sm' name={icon} />
						: <div className={s['default-icon']} />
					}
				</div>
			</button>
			<div
				ref={contentRef}
				aria-hidden={!isActive}
				className={s.panel__inner}
				style={animated && innerStyle}
			>
				<div className={s.panel__content}>{children}</div>
			</div>
		</div>
	)
}

Panel.defaultProps = {
	animated: true
}

Panel.propTypes = {
	index: PropTypes.number.isRequired,
	label: PropTypes.string.isRequired,
	defaultActiveTab: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
	disabled: PropTypes.bool,
	animated: PropTypes.bool,
	icon: PropTypes.string
}

export default Panel
