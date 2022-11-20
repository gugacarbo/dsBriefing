import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import NavBar from "./components/NavBar";
import AboutYou from "./Routes/AboutYou";
import Budget from "./Routes/Budget";
import Personality from "./Routes/Personality";
import TargetPublic from "./Routes/TargetPublic";
import YourBrand from "./Routes/YourBrand";
import Sending from "./Routes/Sending";

import Sended from "./Routes/Sended";

function AnimatedRoutes() {
  const noNav = ["/enviando", "/enviado"];
  const location = useLocation();
  return (
    <>
      {!noNav.includes(location.pathname) && <NavBar />}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutYou />} />
          <Route path="sua-marca" element={<YourBrand />} />
          <Route path="seu-publico" element={<TargetPublic />} />
          <Route path="personalidade" element={<Personality />} />
          <Route path="orcamento" element={<Budget />} />
          <Route path="enviando" element={<Sending />} />
          <Route path="enviado" element={<Sended />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default AnimatedRoutes;
