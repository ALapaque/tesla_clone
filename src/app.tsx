import Home from "./components/Home";
import Header from "./components/Header";
import Navbar from "./components/ui/navbar/Navbar";
import NavbarProvider from "./components/ui/navbar/NavbarProvider";

export function App() {
	return (
		<>
			<NavbarProvider>
				<Header/>
				<Home/>
				<Navbar/>
			</NavbarProvider>
		</>
	);
}

export default App;
