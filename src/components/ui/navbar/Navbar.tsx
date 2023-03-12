import {DetailedHTMLProps, HTMLAttributes, useContext} from "react";
import NavbarBackdrop from "./NavbarBackdrop";
import NavbarContent from "./NavbarContent";
import sections from "../../../datasources/sections";
import SectionModel from "../../../models/Section.model";
import NavbarCloseButton from "./NavbarCloseButton";
import NavbarContext, {INavbarContext} from "./NavbarContext";
import {Fade} from "react-awesome-reveal";

const Navbar = (props: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'ref' | 'children'>) => {
	const {state, toggle} = useContext<INavbarContext>(NavbarContext)

	const _handleOnClose = () => {
		toggle()
	}

	if (!state) {
		return <></>
	}

	return (
		<>
			<NavbarBackdrop/>
			<NavbarContent {...props}>
				<Fade className='close-button' direction={"right"}>
					<NavbarCloseButton
						onClick={_handleOnClose}
						src='/images/close.svg'/>
				</Fade>
				<ul>
					<Fade
						className='nav-item'
						cascade
						direction={"down"}
						delay={250}
						duration={400}>
						{sections.map((section: SectionModel) => (
							<li>
								<a
									href={section.getHref}
									onClick={_handleOnClose}>
									{section.title}
								</a>
							</li>
						))}
					</Fade>
				</ul>
			</NavbarContent>
		</>
	)
}

export default Navbar
