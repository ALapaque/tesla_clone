import Wrap from "./ui/Wrap";
import ItemText from "./ui/ItemText";
import ButtonGroup from "./ui/ButtonGroup";
import LeftButton from "./ui/LeftButton";
import RightButton from "./ui/RightButton";
import DownArrow from "./ui/DownArrow";
import WrapActions from "./ui/WrapActions";

interface Props {
	title: string,
	description: string,
	backgroundImage: string,
	leftButtonText: string,
	rightButtonText: string
}

export default function Section({title, description, backgroundImage, leftButtonText, rightButtonText}: Props) {
	return (
		<Wrap backgroundImage={backgroundImage}>
			<ItemText>
				<h1>{title}</h1>
				<p>{description}</p>
			</ItemText>

			<WrapActions>
				<ButtonGroup>
					<LeftButton>
						{leftButtonText}
					</LeftButton>
					<RightButton>
						{rightButtonText}
					</RightButton>
				</ButtonGroup>

				<DownArrow src="/images/down-arrow.svg"/>
			</WrapActions>
		</Wrap>
	)
}