import SectionContainer from "./ui/section/SectionContainer";
import Section from "./Section";
import sections from "../datasources/sections";
import SectionModel from "../models/Section.model";

export default function Home() {
	return (
		<SectionContainer>
			{sections.map((section: SectionModel, index: number) =>
				<Section
					showIndicator={index === 0}
					{...section} />
			)}

		</SectionContainer>
	)
}