import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
	top: 0;
  left: 0;
  right: 0;
	min-height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	z-index: 1;
	
	img#logo {
		height: 2dvh;
    width: 25vw;
    max-width: 200px;
	}
	
	nav {
		margin-left: -7.5vw;
	}
`

export default HeaderContainer