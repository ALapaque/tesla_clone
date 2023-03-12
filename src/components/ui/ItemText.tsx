import styled from "styled-components";

const ItemText  = styled.div`
	padding-top: 15dvh;
	text-align: center;
	h1 {
		font-size: clamp(2.5rem,8dvw,4rem);
		font-weight: 700;
	}
	
	p {
		font-size: clamp(.5rem,8dvw,1.25rem);
    font-weight: 500;
	}
`

export default ItemText