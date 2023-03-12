import DownArrow from "./DownArrow";

const SectionIndicator = () => {
	const _handleOnClick = () => {
		const sections: HTMLCollectionOf<HTMLElement> | null = document.getElementsByTagName('section')

		if (!sections?.length) {
			return
		}

		sections[1].scrollIntoView({block: 'start', inline: 'start', behavior: 'smooth'})
	}

	return (
		<DownArrow
			onClick={_handleOnClick}
			src="/images/down-arrow.svg"
		/>
	)
}

export default SectionIndicator