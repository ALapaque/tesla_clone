import styled from "styled-components";

const BaseButton = styled.button`
  background-color: rgba(23, 26, 32, 0.8);
	backdrop-filter: blur(6px);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  opacity: 0.85;
	font-weight: 800;
  cursor: pointer;
	border: none;
`

export default BaseButton