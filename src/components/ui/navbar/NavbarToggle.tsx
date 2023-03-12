import styled from "styled-components";

const NavbarToggle = styled.button`
	padding: 8px;
	backdrop-filter: blur(16px);
	border: none;
	background-color: rgba(0,0,0,.05);
	border-radius: 4px;
	cursor: pointer;
  transition: background-color ease-in-out .5s;
	
	span {
		margin: 0 8px;
		font-weight: 700;
	}
	
	&:hover {
    background-color: rgba(0,0,0,.1);
	}
`

export default NavbarToggle