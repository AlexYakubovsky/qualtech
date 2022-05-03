import PropTypes from 'prop-types'
import cn from 'classnames'
import s from './header.module.scss'

const MenuToggle = ({ toggle, isOpen }) => {
	return (
		<div
			className={cn(s['toggle-menu'], { [s.open]: isOpen })}
			onClick={toggle}
		>
			<span />
			<span />
		</div>
	)
}

MenuToggle.propTypes = {
	toggle: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired
}

export default MenuToggle
