const useOverflow = () => {
	const handlerOverflow = isHidden => {
		if (isHidden) {
			document.body.style.cssText = 'overflow: hidden; width: calc(100vw - 5px)'
		} else {
			document.body.style.cssText = null
		}
	}

	return { handlerOverflow }
}

export default useOverflow
