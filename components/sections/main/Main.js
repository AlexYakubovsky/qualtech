import { useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import { motion } from 'framer-motion'
import { Text } from '@/components/ui'
import styles from './main.module.sass'

const Main = () => {
	const text = [
		{
			title: 'Комплексный подход',
			text: 'Аналитика | UX/UI | Front-end | Back-end | Продвижение | Техническая поддержка ',
			subText: 'Международный формат'
		},
		{
			title: 'Разработка мобильных приложений',
			text: 'Разработка приложений любой сложности',
			subText: 'Взаимодействие Swift с JavaScript'
		},
		{
			title: 'Разработка сайтов любой сложности',
			text: 'Мы разрабатываем сайты любого типа. От лендинга до мультифункциональных информационных порталов',
			subText: 'Разработка под ключ'
		}
	]

	var settings = {
		dots: true,
		infinite: true,
		fade: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	}

	return (
		<section className='section'>
			<Image
				src='/images/backgrounds/0.png'
				layout='fill'
				objectFit='cover'
				quality={100}
				alt=''
			/>

			<div className='container'>
				{/*<Slider {...settings}>*/}
					{text.map((slide, i) => {
						return (
							<motion.div
								key={i}
								className={styles.slide}
								animate={{
									scale: [1, 2, 2, 1, 1],
									rotate: [0, 0, 270, 270, 0],
									borderRadius: ["20%", "20%", "50%", "50%", "20%"],
								}}
							>
								<div className='row row-20 align-items-center'>

									<div className='col-xl-6'>
										<Text as={'h1'}>{slide.title}</Text>
										<Text as={'p'} className={'mt-30'} size={'xl'}>{slide.text}</Text>
										<Text as={'p'} className={'mt-30'} size={'lg'} color={'green'}>{slide.subText}</Text>
									</div>
									<div className='col-xl-6'>
										{console.log(`/images/sections/main/${i}.png`)}
										<Image
											src={`/images/sections/main/${i}.png`}
											width={719}
											height={561}
											alt=''
										/>
									</div>
								</div>
							</motion.div>
						)
					})}
				{/*</Slider>*/}
			</div>
		</section>
	)
}

export default Main








// import * as React from "react";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { wrap } from "popmotion";
//
// const variants = {
// 	enter: (direction) => {
// 		return {
// 			x: direction > 0 ? 1000 : -1000,
// 			opacity: 0
// 		};
// 	},
// 	center: {
// 		zIndex: 1,
// 		x: 0,
// 		opacity: 1
// 	},
// 	exit: (direction) => {
// 		return {
// 			zIndex: 0,
// 			x: direction < 0 ? 1000 : -1000,
// 			opacity: 0
// 		};
// 	}
// };
//
// /**
//  * Experimenting with distilling swipe offset and velocity into a single variable, so the
//  * less distance a user has swiped, the more velocity they need to register as a swipe.
//  * Should accomodate longer swipes and short flicks without having binary checks on
//  * just distance thresholds and velocity > 0.
//  */
//
//
// const Main = () => {
// 	const [[page, direction], setPage] = useState([0, 0]);
//
// 	const swipeConfidenceThreshold = 10000;
// 	const swipePower = (offset, velocity) => {
// 		return Math.abs(offset) * velocity;
// 	};
// 	// We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
// 	// then wrap that within 0-2 to find our image ID in the array below. By passing an
// 	// absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
// 	// detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
// 	const imageIndex = wrap(0, images.length, page);
//
// 	const paginate = (newDirection) => {
// 		setPage([page + newDirection, newDirection]);
// 	};
//
// 	return (
// 		<div className="example-container">
// 			<AnimatePresence initial={false} custom={direction}>
// 				<motion.img
// 					key={page}
// 					src={images[imageIndex]}
// 					custom={direction}
// 					variants={variants}
// 					initial="enter"
// 					animate="center"
// 					exit="exit"
// 					transition={{
// 						x: { type: "spring", stiffness: 300, damping: 30 },
// 						opacity: { duration: 0.2 }
// 					}}
// 					drag="x"
// 					dragConstraints={{ left: 0, right: 0 }}
// 					dragElastic={1}
// 					onDragEnd={(e, { offset, velocity }) => {
// 						const swipe = swipePower(offset.x, velocity.x);
//
// 						if (swipe < -swipeConfidenceThreshold) {
// 							paginate(1);
// 						} else if (swipe > swipeConfidenceThreshold) {
// 							paginate(-1);
// 						}
// 					}}
// 				/>
// 			</AnimatePresence>
// 			<div className="next" onClick={() => paginate(1)}>
// 				{"‣"}
// 			</div>
// 			<div className="prev" onClick={() => paginate(-1)}>
// 				{"‣"}
// 			</div>
// 		</div>
// 	);
// };
//
// export const images = [
// 	"https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
// 	"https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
// 	"https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"
// ];
//
//
// export default Main