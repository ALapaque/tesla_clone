import HeaderContainer from "./ui/HeaderContainer";
import Menu from "./ui/Menu";
import NavbarToggle from "./ui/NavbarToggle";
import {Fade} from "react-awesome-reveal";

export default function Header() {
	const _getHref = (value: string): string => {
		return `#${encodeURIComponent(value)}`
	}

	return (
		<HeaderContainer>
			<Fade direction={"down"}>

				<a href="#">
					<img id="logo" src='/images/tesla.svg' alt="tesla_logo"/>
				</a>
				<Menu>
					<a href={_getHref('Model S')}>Model S</a>
					<a href={_getHref('Model 3')}>Model 3</a>
					<a href={_getHref('Model X')}>Model X</a>
					<a href={_getHref('Model Y')}>Model Y</a>
				</Menu>

				<NavbarToggle>
					<span>Menu</span>
				</NavbarToggle>
			</Fade>
		</HeaderContainer>
	)
}