import HeaderContainer from "./ui/header/HeaderContainer";
import Menu from "./ui/header/Menu";
import NavbarToggle from "./ui/navbar/NavbarToggle";
import sections from "../datasources/sections";
import SectionModel from "../models/Section.model";
import {useContext} from "react";
import NavbarContext, {INavbarContext} from "./ui/navbar/NavbarContext";
import {motion} from "framer-motion";

export default function Header() {
	const navSections = sections.filter((section: SectionModel) => section.shownInNav)
	const {toggle} = useContext<INavbarContext>(NavbarContext)

	const _toggleMenu = () => {
		toggle()
	}

	return (
		<HeaderContainer>
			<motion.a
				href={navSections[0].getHref}
				initial={{
					x: -500,
					opacity: 0,
				}}
				animate={{
					x: 0,
					opacity: 1,
				}}
				transition={{
					duration: 0.75
				}}>
				<img id="logo" src='/images/tesla.svg' alt="tesla_logo"/>

			</motion.a>

			<Menu>
				{navSections.map((section: SectionModel) => (
					<motion.a
						href={section.getHref}
						initial={{
							y: -500,
							opacity: 0,
						}}
						animate={{
							y: 0,
							opacity: 1,
						}}
						transition={{
							duration: 1,
							delay: .5
						}}>
						{section.title}
					</motion.a>
				))}
			</Menu>

			<motion.div
				initial={{
					x: 500,
					opacity: 0,
				}}
				animate={{
					x: 0,
					opacity: 1,
				}}
				transition={{
					duration: 0.75
				}}>
				<NavbarToggle onClick={_toggleMenu}>
					<span>Menu</span>
				</NavbarToggle>
			</motion.div>

		</HeaderContainer>
	)
}