import styles from './header.module.sass'

export default function MenuToggle({ toggle, isOpen }) {
	return (
		<div
			className={`${styles['toggle-menu']} ${isOpen ? styles.open : ''}`}
			onClick={toggle}
		>
			<span />
			<span />
		</div>
	)
}
