import styled from "styled-components";

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    padding: 8px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: 0 8px;
    font-weight: 700;
    transition: background-color ease-in-out .5s;

    &:hover {
      background-color: rgba(0, 0, 0, .1);
      backdrop-filter: blur(16px);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export default Menu