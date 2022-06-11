import { createTransport } from 'nodemailer'

export default async function (req, res) {
	try {
		const { name, phone, message, from } = req.body

		if (!name || !phone || !message || !from) {
			res.status(500).json({ message: 'Заполните все поля!' })
		}

		const transporter = createTransport({
			host: 'smtp.yandex.ru',
			port: 465,
			secure: true,
			service: 'yandex',
			auth: {
				user: 'qualtech.mail@yandex.ru',
				pass: 'brhnoiguxcprxoiy',
				// emailPassword: 'poshlivsenahuy!'
			}
		})

		//TODO добавить сюда доменнкю почту
		//TODO добавить сохранение в БД
		const mailData = {
			from: 'qualtech.mail@yandex.ru',
			to: ['qualtech.mail@yandex.ru', 'alex.yakubovsky.g@gmail.com'],
			subject: `qualtech - заявка с сайта`,
			text: message,
			html: `
      <p>Имя: ${name}</p>
      <p>Телефон: ${phone}</p>
      <p>Сообщение: ${message}</p>
      <p>Заявка из: ${from}</p>
    	`
		}

		await transporter.sendMail(mailData)
		res.status(200).json({ message: 'Заявка отправлена!' })
	} catch {
		res.status(500).json({ message: 'Ошибка при отправке заявки' })
	}
}
