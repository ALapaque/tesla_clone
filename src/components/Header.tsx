import HeaderContainer from "./ui/HeaderContainer";
import Menu from "./ui/Menu";
import NavbarToggle from "./ui/NavbarToggle";
import {Fade} from "react-awesome-reveal";

export default function Header() {
	return (
		<Fade cascade>
			<HeaderContainer>
				<a href="">
					<img id="logo" src='/images/tesla.svg' alt="tesla_logo"/>
				</a>
				<Menu>
					<a href="#">Model S</a>
					<a href="#">Model 3</a>
					<a href="#">Model X</a>
					<a href="#">Model Y</a>
				</Menu>

				<NavbarToggle>
					<span>Menu</span>
				</NavbarToggle>
			</HeaderContainer>
		</Fade>
	)
}