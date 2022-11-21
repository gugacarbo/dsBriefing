import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import AnimatedRoutes from "./AnimatedRoutes";
import ScrollToTop from "./util/Hooks";

function App() {
  return (
    <AppContainer>
      <Router>
        <ScrollToTop />
        <AnimatedRoutes />
      </Router>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;

  margin: 0 auto;
  max-width: 1276px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.color.main};
  @media (max-width: 600px) {
  }
`;

export default App;
