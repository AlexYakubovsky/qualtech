import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Lottie, Text } from 'components/ui'
import s from './how-we-work.module.scss'

const Step = ({
	title,
	description,
	stepNumber,
	square,
	squareColor,
	animationsImg,
	svgLine
}) => {
	const snakeSquareClassList = cn(
		s.square,
		{
			[s['square-' + square]]: square,
			[s['color-' + squareColor]]: squareColor
		}
	)

	return (
		<div className={cn(s.step, s['step-number-' + stepNumber])}>
			<div className={s.step__content}>
				<Text as='h6'>{title}</Text>
				<Text as='p' size='lg' className={s.description}>{description}</Text>
			</div>
			<div className={s.step__snake}>
				<div className={snakeSquareClassList}>
					<span className={s.number}>0{stepNumber}.</span>
				</div>
				<div className={s.line} />
			</div>
			{animationsImg.length && (
				animationsImg.map((animation, i) => (
					<Lottie
						key={i}
						path={animation}
						className={cn(s['animation-img'], s[`animation-${+i + 1}`])}
					/>
				))
			)}
			{svgLine && (
				<div className={s['svg-line']}>{svgLine}</div>
			)}
		</div>
	)
}

Step.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	stepNumber: PropTypes.oneOfType([
		PropTypes.string, PropTypes.number
	]).isRequired,
	square: PropTypes.oneOf(['fill', 'dashed']),
	squareColor: PropTypes.oneOf(['violet', 'green', 'pink']),
	animationsImg: PropTypes.array,
	svgLine: PropTypes.shape({})
}

export default Step
