import PropTypes from 'prop-types'
import cn from 'classnames'
import { FadeIn } from 'components/ui'
import s from './header.module.scss'

const MenuToggle = ({ toggle, isOpen }) => {
	return (
		<FadeIn
			className={cn(s['toggle-menu'], { [s.open]: isOpen })}
			onClick={toggle}
			duration={0.5}
			y={0}
		>
			<span />
			<span />
		</FadeIn>
	)
}

MenuToggle.propTypes = {
	toggle: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired
}

export default MenuToggle
