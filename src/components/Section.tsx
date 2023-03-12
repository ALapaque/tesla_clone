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
		<Wrap backgroundImage={backgroundImage}>
			<Fade
				cascade
				direction={"up"}
				triggerOnce>
				<ItemText>
					<h1>{title}</h1>
					{description && (
						<p>{description}</p>
					)}
				</ItemText>
			</Fade>

			<Fade
				cascade
				direction={"up"}
				triggerOnce>
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