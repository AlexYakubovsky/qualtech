import img from '@/images/backgrounds/0.png'
import { Section, Carousel, SlideItem, Text, Button, Lottie } from '@/components/ui'

export default function Banners() {
	return (
		<Section backgroundImg={img} first>
			<div className='container'>
				<Carousel
					allowTouchMove={true}
					effect='fade'
					loop={true}
					speed={1400}
					pagination={{ clickable: true }}
					autoplay={{
						delay: 4500,
						disableOnInteraction: false
					}}
				>
					<SlideItem>
						<div className='row row-20 align-items-center'>
							<div className='col-xl-6'>
								<Text as='h1'>Разработка сайтов любой сложности</Text>
								<Text as='p' className='offset-top-30' size='xl'>
									{`Мы разрабатываем сайты любого типа.\nОт лендинга до мультифункциональных информационных порталов`}
								</Text>
								<Text as='p' className='offset-top-30' size='lg' color='green' weight='bold'>Разработка под ключ</Text>
								<Button size='lg' className='offset-xl-top-80'>Оставить заявку</Button>
							</div>
							<div className='col-xl-6'>
								<Lottie path='/animations/banner-1.json' />
							</div>
						</div>
					</SlideItem>
					<SlideItem>
						<div className='row row-20 align-items-center'>
							<div className='col-xl-6'>
								<Text view='seo'>Комплексный подход</Text>
								<Text as='p' className='offset-top-30' size='xl'>
									{`Аналитика | UX/UI | Front-end | Back-end\nПродвижение | Техническая поддержка`}
								</Text>
								<Text as='p' className='offset-top-30' size='lg' color='green' weight='bold'>Международный формат</Text>
								<Button size='lg' className='offset-xl-top-80'>Оставить заявку</Button>
							</div>
							<div className='col-xl-6'>
								<Lottie path='/animations/banner-0.json' />
							</div>
						</div>
					</SlideItem>
					<SlideItem>
						<div className='row row-20 align-items-center'>
							<div className='col-xl-6'>
								<Text view='seo'>Разработка мобильных приложений</Text>
								<Text as='p' className='offset-top-30' size='xl'>{`Разработка приложений\nлюбой сложности`}</Text>
								<Text as='p' className='offset-top-30' size='lg' color='green' weight='bold'>
									Взаимодействие Swift с JavaScript
								</Text>
								<Button size='lg' className='offset-xl-top-80'>Оставить заявку</Button>
							</div>
							<div className='col-xl-6'>
								<Lottie path='/animations/banner-2.json' />
							</div>
						</div>
					</SlideItem>
				</Carousel>
			</div>
		</Section>
	)
}
