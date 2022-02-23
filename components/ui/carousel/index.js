import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, FreeMode, EffectFade } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/effect-fade'

const Carousel = ({ children, ...rest }) => {
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

	return (
		<Swiper {...rest} modules={modulesList}>
			{children}
		</Swiper>
	)
}

const SlideItem = SwiperSlide

export { Carousel, SlideItem }
