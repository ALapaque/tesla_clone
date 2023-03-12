import Wrap from "./ui/Wrap";
import ItemText from "./ui/ItemText";
import ButtonGroup from "./ui/ButtonGroup";
import LeftButton from "./ui/LeftButton";
import RightButton from "./ui/RightButton";
import WrapActions from "./ui/WrapActions";
import {Fade} from "react-awesome-reveal";

interface Props {
	title: string,
	backgroundImage: string,
	description?: string,
	leftButtonText?: string,
	rightButtonText?: string
}

export default function Section({title, description, backgroundImage, leftButtonText, rightButtonText}: Props) {
	return (
		<Wrap
			id={encodeURIComponent(title)}
			backgroundImage={backgroundImage}>
			<ItemText>
				<Fade
					triggerOnce
					cascade
					direction={"up"}>
					<h1>{title}</h1>
					{description && (
						<p>{description}</p>
					)}
				</Fade>
			</ItemText>

			<Fade
				triggerOnce
				cascade
				direction={"up"}>
				<WrapActions>
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
				</WrapActions>
			</Fade>
		</Wrap>
	)
}