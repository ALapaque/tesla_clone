import Wrap from "./ui/section/Wrap";
import ItemText from "./ui/ItemText";
import ButtonGroup from "./ui/ButtonGroup";
import LeftButton from "./ui/section/LeftButton";
import RightButton from "./ui/section/RightButton";
import WrapActions from "./ui/section/WrapActions";
import SectionIndicator from "./ui/section/SectionIndicator";
import {motion} from "framer-motion";

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
				<motion.h1
					initial={{
						y: 300,
						opacity: 0,
					}}
					whileInView={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						duration: 0.75,
						delay: 0.5
					}}>
					{title}
				</motion.h1>
				{description && (
					<motion.p
						initial={{
							y: 300,
							opacity: 0,
						}}
						whileInView={{
							y: 0,
							opacity: 1,
							scale: 1
						}}
						transition={{
							duration: 0.75,
							delay: 0.625
						}}>
						{description}
					</motion.p>
				)}
			</ItemText>


			<motion.div
				initial={{
					y: -300,
					opacity: 0,
				}}
				whileInView={{
					y: 0,
					opacity: 1,
				}}
				transition={{
					duration: 1,
					delay: 0.5
				}}>
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
			</motion.div>

			{showIndicator && <SectionIndicator/>}
		</Wrap>
	)
}