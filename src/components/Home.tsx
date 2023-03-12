import SectionContainer from "./ui/SectionContainer";
import Section from "./Section";
import DownArrow from "./ui/DownArrow";
import sections from "../datasources/sections";
import SectionModel from "../models/Section.model";

export default function Home() {
	return (
		<SectionContainer>
			{sections.map((section: SectionModel) => <Section {...section} />)}

			<DownArrow src="/images/down-arrow.svg"/>
		</SectionContainer>
	)
}