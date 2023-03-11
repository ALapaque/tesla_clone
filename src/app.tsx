import styled from 'styled-components';
import Header from "./components/Header";
import Home from "./components/Home";


const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      {/*<Header />*/}
      <Home />
    </StyledApp>
  );
}

export default App;
