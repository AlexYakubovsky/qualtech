import React from 'react'
import PropTypes from 'prop-types'
import BaseModal from 'react-modal'
import Icon from '../icon/Icon'
import cx from 'classnames'

const Modal = ({
	children,
	isOpen,
	onAfterOpen,
	onAfterClose,
	onRequestClose,
	closeTimeoutMS,
	contentLabel,
	shouldCloseOnOverlayClick,
	parentSelector,
	size,
	...rest
}) => {
	const classList = cx(
		'modal',
		{
			[size]: size
		}
	)

	let inlineStyle
	if (!isOpen && closeTimeoutMS) {
		inlineStyle = {
			overlay: {
				transition: `opacity ${closeTimeoutMS}ms ease-in-out`
			}
		}
	}

	return (
		<BaseModal
			isOpen={isOpen}
			onAfterOpen={onAfterOpen}
			onAfterClose={onAfterClose}
			onRequestClose={onRequestClose}
			closeTimeoutMS={closeTimeoutMS}
			contentLabel={contentLabel}
			shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
			parentSelector={parentSelector}
			className={classList}
			overlayClassName='modal__overlay'
			style={inlineStyle}
			ariaHideApp={false}
			{...rest}
		>
			<Icon
				size='md'
				name='close'
				className='modal__close'
				onClick={onRequestClose}
			/>
			{children}
		</BaseModal>
	)
}
Modal.defaultProps = {
	closeTimeoutMS: 200,
	isOpen: false,
	shouldCloseOnOverlayClick: true,
	shouldCloseOnEsc: true
}

Modal.propTypes = {
	size: PropTypes.oneOf(['', 'full', 'lg', 'md', 'sm']),
	onAfterOpen: PropTypes.func,
	onAfterClose: PropTypes.func,
	onRequestClose: PropTypes.func,
	closeTimeoutMS: PropTypes.number,
	isOpen: PropTypes.bool.isRequired,
	contentLabel: PropTypes.string,
	shouldCloseOnOverlayClick: PropTypes.bool,
	shouldCloseOnEsc: PropTypes.bool,
	parentSelector: PropTypes.elementType
}

export default Modal
