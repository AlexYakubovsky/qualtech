import { Section, Text, Button } from 'components/ui'
import ServiceItem from 'components/sections/ourServices/ServiceItem'
import img from 'images/backgrounds/1.png'

export default function OurServices() {
	return (
		<Section style={{ background: 'white' }} backgroundImg={img.src}>
			<div className='container'>
				<div className='row row-20 align-items-center'>
					<div className='col-xl-6'>
						<Text as='h2' color='black'>Наши услуги</Text>
						<Text as='p' size='xl' color='black' className='offset-xl-top-30'>
							Мы предлагаем полный комплекс услуг для проектов любого уровня и любой стадии готовности — от начальной,
							когда есть лишь идея, нуждающаяся в разработке, создании инструментов и продвижении, до заключительной,
							когда ресурсу необходима только поддержка
						</Text>
						<Button view='secondary' className='offset-xl-top-80'>Оставить заявку</Button>
					</div>
					<div className='col-xl-6'>
						<div className='row row-40'>
							<ServiceItem
								index='0'
								title='Сайты всех типов'
								footer='Сильные бренды и яркие digital-проекты'
							>
								<ul className='list-style'>
									<Text as='li' size='sm'>Интернет-магазин</Text>
									<Text as='li' size='sm'>Корпоративный сайт</Text>
									<Text as='li' size='sm'>Каталог</Text>
									<Text as='li' size='sm'>Сайт-визитка</Text>
								</ul>
							</ServiceItem>
							<ServiceItem
								index='1'
								title='Порталы'
								footer='Интерактивные интернет-сервисы'
							>
								<Text as='p' size='sm'>
									{`Многофункциональная площадка, совмещающая разнонаправленные группы сервисов
									 или направлений деятельности, объединенных единой концепцией`}
								</Text>
							</ServiceItem>
							<ServiceItem
								index='2'
								title='Продвижение'
							>
								<ul className='list-style'>
									<Text as='li' size='sm'>Интегрированнная CRM, RPM, HRM, Asterisk, OTRS</Text>
									<Text as='li' size='sm'>Аналитический сервер Spark</Text>
									<Text as='li' size='sm'>Учёт и контроль рабочего времени</Text>
									<Text as='li' size='sm'>Сервер мониторинга видимости</Text>
									<Text as='li' size='sm'>Автоматическая система ключевых показателей</Text>
								</ul>
							</ServiceItem>
							<ServiceItem
								index='3'
								title='Приложения'
								footer='iOS и Android'
							>
								<ul className='list-style'>
									<Text as='li' size='sm'>Для молодых стартапов</Text>
									<Text as='li' size='sm'>Крупным корпорациям</Text>
									<Text as='li' size='sm'>Малому и среднему бизнесу</Text>
									<Text as='li' size='sm'>Digital-агенствам</Text>
								</ul>
							</ServiceItem>
						</div>
					</div>
				</div>
			</div>
		</Section>
	)
}