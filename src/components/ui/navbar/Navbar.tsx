import {DetailedHTMLProps, HTMLAttributes, useContext, useState} from "react";
import NavbarBackdrop from "./NavbarBackdrop";
import NavbarContent from "./NavbarContent";
import NavbarContext, {INavbarContext} from "./NavbarContext";
import {Fade, Slide} from "react-awesome-reveal";
import NavbarCloseButton from "./NavbarCloseButton";
import sections from "../../../datasources/sections";
import SectionModel from "../../../models/Section.model";

const Navbar = (props: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'ref' | 'children'>) => {
	const [reverse, setReverse] = useState<boolean>(false)
	const {state, toggle} = useContext<INavbarContext>(NavbarContext)

	const _handleOnClose = () => {
		setReverse(true)
		setTimeout(() => {
			toggle()
			setReverse(false)
		}, 650)
	}

	if (!state) {
		return <></>
	}

	return (
		<>
			<NavbarBackdrop onClick={_handleOnClose}/>
			<NavbarContent {...props}>
				<Slide
					reverse={reverse}
					direction={"right"}
					duration={500}
				>
					<div id="navbar_content">
						<Fade
							className='close-button'
							delay={550}
							direction={"right"}>
							<NavbarCloseButton
								onClick={_handleOnClose}
								src='/images/close.svg'/>
						</Fade>
						<ul>
							<Fade
								className='nav-item'
								cascade
								direction={"down"}
								delay={650}
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
					</div>
				</Slide>
			</NavbarContent>
		</>
	)
}

export default Navbar
