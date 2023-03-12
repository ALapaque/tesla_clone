import {createContext} from "react";

export interface INavbarContext {
	state: boolean,
	toggle(): void,
}

const NavbarContext = createContext<INavbarContext>({
	state: false,
	toggle() {
		throw new Error('[NavbarContext] toggle method not impletend')
	}
})

export default NavbarContext