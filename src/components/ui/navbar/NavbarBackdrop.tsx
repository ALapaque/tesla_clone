import styled from "styled-components";

const NavbarBackdrop = styled.div`
	position: absolute;
	top: 0;
  left: 0;
	height: 100dvh;
	width: 100dvw;
	background-color: rgba(32, 32, 32, .05);
	backdrop-filter: blur(16px);
  z-index: 2;
`

export default NavbarBackdrop