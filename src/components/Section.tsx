import Wrap from "./ui/section/Wrap";
import ItemText from "./ui/ItemText";
import ButtonGroup from "./ui/ButtonGroup";
import LeftButton from "./ui/section/LeftButton";
import RightButton from "./ui/section/RightButton";
import WrapActions from "./ui/section/WrapActions";
import {Fade} from "react-awesome-reveal";
import SectionIndicator from "./ui/section/SectionIndicator";

interface Props {
	title: string,
	image: string,
	description?: string,
	leftButtonText?: string,
	rightButtonText?: string,
	showIndicator?: boolean
}

export default function Section(
	{
		title,
		description,
		image,
		leftButtonText,
		rightButtonText,
		showIndicator = false
	}: Props
) {
	return (
		<Wrap
			id={encodeURIComponent(title)}
			backgroundImage={image}>
			<ItemText>
				<Fade
					cascade
					direction={"up"}>
					<h1>{title}</h1>
					{description && (
						<p>{description}</p>
					)}
				</Fade>
			</ItemText>


			<WrapActions>
				<Fade cascade delay={500} direction={"up"}>
					<ButtonGroup>
						{leftButtonText && (
							<LeftButton>
								{leftButtonText}
							</LeftButton>
						)}
						{rightButtonText && (
							<RightButton>
								{rightButtonText}
							</RightButton>
						)}
					</ButtonGroup>
				</Fade>
			</WrapActions>

			{showIndicator && <SectionIndicator/>}
		</Wrap>
	)
}