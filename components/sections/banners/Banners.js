import Image from 'next/image'
import { Carousel, SlideItem, Text, Button, Lottie } from '@/components/ui'
import styles from './banners.module.sass'

export default function Banners() {
	return (
		<section className='section'>
			<div className='container'>
				<Image
					src='/images/backgrounds/0.png'
					layout='fill'
					objectFit='cover'
					quality={100}
					alt=''
				/>
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
						<div className={styles.banner}>
							<div className='row row-20 align-items-center'>
								<div className='col-xl-6'>
									<Text as='h1'>Комплексный подход</Text>
									<Text as='p' className='mt-30' size='xl'>
										{`Аналитика | UX/UI | Front-end | Back-end\nПродвижение | Техническая поддержка`}
									</Text>
									<Text as='p' className='mt-30' size='lg' color='green' weight='bold'>Международный формат</Text>
									<Button size='lg'>Оставить заявку</Button>
								</div>
								<div className='col-xl-6'>
									<Lottie path='/animations/banner-0.json' />
								</div>
							</div>
						</div>
					</SlideItem>
					<SlideItem>
						<div className={styles.banner}>
							<div className='row row-20 align-items-center'>
								<div className='col-xl-6'>
									<Text as='h1'>Разработка мобильных приложений</Text>
									<Text as='p' className='mt-30' size='xl'>{`Разработка приложений\nлюбой сложности`}</Text>
									<Text as='p' className='mt-30' size='lg' color='green' weight='bold'>
										Взаимодействие Swift с JavaScript
									</Text>
									<Button size='lg'>Оставить заявку</Button>
								</div>
								<div className='col-xl-6'>
									<Lottie path='/animations/banner-2.json' />
								</div>
							</div>
						</div>
					</SlideItem>
					<SlideItem>
						<div className={styles.banner}>
							<div className='row row-20 align-items-center'>
								<div className='col-xl-6'>
									<Text as='h1'>Разработка сайтов любой сложности</Text>
									<Text as='p' className='mt-30' size='xl'>
										{`Мы разрабатываем сайты любого типа.\nОт лендинга до мультифункциональных информационных порталов`}
									</Text>
									<Text as='p' className='mt-30' size='lg' color='green' weight='bold'>Разработка под ключ</Text>
									<Button size='lg'>Оставить заявку</Button>
								</div>
								<div className='col-xl-6'>
									<Lottie path='/animations/banner-1.json' />
								</div>
							</div>
						</div>
					</SlideItem>
				</Carousel>
			</div>
		</section>
	)
}
