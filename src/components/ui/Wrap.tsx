import styled from "styled-components";

interface Props {
	backgroundImage: string
}

const Wrap = styled.section<Props>`
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.backgroundImage});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
  scroll-snap-align: start;
`

export default Wrap