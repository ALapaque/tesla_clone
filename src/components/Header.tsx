import HeaderContainer from "./ui/header/HeaderContainer";
import Menu from "./ui/header/Menu";
import NavbarToggle from "./ui/navbar/NavbarToggle";
import {Fade} from "react-awesome-reveal";
import sections from "../datasources/sections";
import SectionModel from "../models/Section.model";
import {useContext} from "react";
import NavbarContext, {INavbarContext} from "./ui/navbar/NavbarContext";

export default function Header() {
	const navSections = sections.filter((section: SectionModel) => section.shownInNav)
	const {toggle} = useContext<INavbarContext>(NavbarContext)

	const _toggleMenu = () => {
		toggle()
	}

	return (
		<HeaderContainer>
			<Fade direction={"down"}>
				<a href={navSections[0].getHref}>
					<img id="logo" src='/images/tesla.svg' alt="tesla_logo"/>
				</a>

				<Menu>
					{navSections
						.map((section: SectionModel) => <a href={section.getHref}>{section.title}</a>)
					}
				</Menu>

				<NavbarToggle onClick={_toggleMenu}>
					<span>Menu</span>
				</NavbarToggle>
			</Fade>
		</HeaderContainer>
	)
}