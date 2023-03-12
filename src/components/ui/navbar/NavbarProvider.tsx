import {ReactNode, useState} from "react";
import NavbarContext from "./NavbarContext";

interface Props {
	children: ReactNode
}

export default function NavbarProvider({children}: Props) {
	const [state, setState] = useState<boolean>(false)

	const _toggle = () => {
		setState(!state)
	}

	return (
		<NavbarContext.Provider value={{
			state,
			toggle: _toggle
		}}>
			{children}
		</NavbarContext.Provider>
	)
}