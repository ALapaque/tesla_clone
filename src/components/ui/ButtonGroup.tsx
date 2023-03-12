import styled from "styled-components";

const ButtonGroup = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: center;
	gap: 2rem;
	
	@media (max-width: 600px) {
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}
`

export default ButtonGroup