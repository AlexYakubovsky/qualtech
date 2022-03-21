import cn from 'classnames'
import Image from 'next/image'
import Text from '@/components/ui/text/Text'
import styles from './our-services.module.sass'

const ServiceItem = ({
	children,
	title,
	footer,
	index
}) => {
	const classNames = cn(
		styles['service-item'],
		styles['item-' + index]
	)

	return (
		<div className='col-xl-6'>
			<div className={classNames}>
				<div className={cn(styles.background, styles.top)}>
					<Image
						src='/images/sections/our-services/top.png'
						width='189'
						height='120'
						alt=''
					/>
				</div>
				<div className={styles['service-item__header']}>
					<Text view='title' color='black'>{title}</Text>
				</div>
				<div className={styles['service-item__body']}>
					{children}
				</div>
				<div className={styles['service-item__footer']}>
					{footer && (
						<Text size='lg' color='green' weight='bold'>{footer}</Text>
					)}
				</div>
				<div className={cn(styles.background, styles.bottom)}>
					<Image
						src={`/images/sections/our-services/${index}-bottom.png`}
						width='330'
						height='213'
						alt=''
					/>
				</div>
			</div>
		</div>
	)
}

export default ServiceItem