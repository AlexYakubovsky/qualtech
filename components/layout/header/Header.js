import styles from './header.module.sass'

export default function Header() {
	return (
		<header
			className={styles.header}
			style={{ left: '0', height: '100px' }}
		>
		<div>
			header
		</div>
		</header>
	)
}