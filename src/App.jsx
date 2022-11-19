import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import AboutYou from "./Routes/AboutYou";
import Budget from "./Routes/Budget";
import Personality from "./Routes/Personality";
import TargetPublic from "./Routes/TargetPublic";
import YourBrand from "./Routes/YourBrand";
import ScrollToTop from "./util/Hooks";

function App() {
  return (
    <AppContainer>
      <NavBar></NavBar>
      <Router>
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<AboutYou />} />
            <Route path="sua-marca" element={<YourBrand />} />
            <Route path="seu-publico" element={<TargetPublic />} />
            <Route path="personalidade" element={<Personality />} />
            <Route path="orcamento" element={<Budget />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 90vw;
  min-height: 100vh;
  height: 100%;
  margin: 0 auto;
  max-width: 1276px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

export default App;
