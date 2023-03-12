import {DetailedHTMLProps, HTMLAttributes} from "react";
import NavbarBackdrop from "./NavbarBackdrop";
import NavbarContent from "./NavbarContent";

const Navbar = (props: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'ref'>) => {
	return (
		<>
			<NavbarBackdrop/>
			<NavbarContent {...props} />
		</>
	)
}

export default Navbar
