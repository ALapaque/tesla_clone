import styled from "styled-components";

const NavbarContent = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
  background: #ffffff;
  height: 100dvh;
  width: 300px;
  max-width: 75vw;
  padding: 20px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  overflow-x: hidden;

  ul {
    width: 100%;
		display: flex;
		flex-direction: column;
		gap: 10px;

    li {
      list-style: none;
      border-radius: 4px;
      padding: 6px 20px;
      transition: ease-in-out 250ms;
      font-weight: 600;
      color: #393c41;

      &:hover {
        background-color: rgba(0, 0, 0, .05);
      }
    }
  }

  div.close-button {
    width: 40px;
    height: 40px;
    justify-self: flex-end;
    align-self: flex-end;
    cursor: pointer;
  }
`

export default NavbarContent