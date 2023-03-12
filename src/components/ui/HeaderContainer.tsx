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
	
	img#logo {
		height: 2vh;
		max-width: 30vw;
	}
`

export default HeaderContainer