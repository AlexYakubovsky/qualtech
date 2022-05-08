import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Image from 'next/image'
import { Text, Col } from 'components/ui'
import s from './our-services.module.scss'

const ServiceItem = ({
	children,
	index,
	title,
	footer
}) => {
	const classNames = cn(
		s['service-item'],
		s['item-' + index]
	)

	return (
		<Col sm={6}>
			<div className={classNames}>
				<div className={cn(s.background, s.top)}>
					<Image
						src='/images/sections/our-services/top.svg'
						width='189'
						height='120'
						alt=''
					/>
				</div>
				<div className={s['service-item__header']}>
					<Text as='h6' color='black'>{title}</Text>
				</div>
				<div className={s['service-item__body']}>
					{children}
				</div>
				<div className={s['service-item__footer']}>
					{footer && (
						<Text as='p' size='lg' color='green' weight='bold'>{footer}</Text>
					)}
				</div>
				<div className={cn(s.background, s.bottom)}>
					<Image
						src={`/images/sections/our-services/${index}-bottom.svg`}
						layout='fill'
						objectFit='cover'
						alt=''
					/>
				</div>
			</div>
		</Col>
	)
}

ServiceItem.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	footer: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
}

export default ServiceItem
