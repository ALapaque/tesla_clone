import {ReactNode} from "react";
import NavbarContext from "./NavbarContext";
import {useCycle} from "framer-motion";

interface Props {
	children: ReactNode
}

export default function NavbarProvider({children}: Props) {
	const [open, cycleOpen] = useCycle(false, true);


	const _toggle = () => {
		cycleOpen()
	}

	return (
		<NavbarContext.Provider value={{
			state: open,
			toggle: _toggle
		}}>
			{children}
		</NavbarContext.Provider>
	)
}