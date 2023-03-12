import HeaderContainer from "./ui/HeaderContainer";
import Menu from "./ui/Menu";
import NavbarToggle from "./ui/NavbarToggle";
import {Fade} from "react-awesome-reveal";
import sections from "../datasources/sections";
import SectionModel from "../models/Section.model";

export default function Header() {
	const navSections = sections.filter((section: SectionModel) => section.shownInNav)

	const _getHref = (value: string): string => {
		return `#${encodeURIComponent(value)}`
	}

	return (
		<HeaderContainer>
			<Fade direction={"down"}>
				<a href={_getHref(navSections[0].title)}>
					<img id="logo" src='/images/tesla.svg' alt="tesla_logo"/>
				</a>

				<Menu>
					{navSections
						.map((section: SectionModel) => section.title)
						.map((name: string) => <a href={_getHref(name)}>{name}</a>)
					}
				</Menu>

				<NavbarToggle>
					<span>Menu</span>
				</NavbarToggle>
			</Fade>
		</HeaderContainer>
	)
}