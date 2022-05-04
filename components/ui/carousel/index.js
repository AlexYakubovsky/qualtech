import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, FreeMode, EffectFade, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/effect-fade'

const Carousel = ({
	children,
	classNameWrapper,
	...rest
}) => {
	const modulesList = []

	if (rest.navigation) {
		modulesList.push(Navigation)
	}
	if (rest.pagination) {
		modulesList.push(Pagination)
	}
	if (rest.freeMode) {
		modulesList.push(FreeMode)
	}
	if (rest.effect) {
		if (rest.effect === 'fade') {
			modulesList.push(EffectFade)
		}
	}
	if (rest.autoplay) {
		modulesList.push(Autoplay)
	}

	return (
		<div className={classNameWrapper}>
			<Swiper {...rest} modules={modulesList}>
				{children}
			</Swiper>
		</div>
	)
}

const SlideItem = SwiperSlide

export { Carousel, SlideItem }
