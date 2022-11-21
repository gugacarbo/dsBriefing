import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../../assets/logo.svg";
import { ReactComponent as NavLeftSvg } from "../../assets/nav/left.svg";
import { ReactComponent as NavRightSvg } from "../../assets/nav/right.svg";
import { ReactComponent as NavCenterSvg } from "../../assets/nav/center.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function NavBar() {
  const location = useLocation();

  function MobileBarLabels() {
    let titles = {
      "/": "1. Sobre Você",
      "/sua-marca": "2. Sobre sua Marca",
      "/seu-publico": "3. Sobre seu público alvo",
      "/personalidade": "4. Sobre a personalidade",
      "/orcamento": "5. Sobre o orçamento",
    };
    let pagesPath = [
      "/",
      "/sua-marca",
      "/seu-publico",
      "/personalidade",
      "/orcamento",
    ];
    let index = pagesPath.indexOf(location.pathname);
    return [
      [pagesPath[index - 1], titles[pagesPath[index - 1]]],
      [pagesPath[index], titles[pagesPath[index ]]],
      [pagesPath[index + 1], titles[pagesPath[index + 1]]],
    ];
  }
  var mobileLabels = MobileBarLabels();

  return (
    <NavBarContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <LogoContainer to="enviando">
        <LogoIcon />
      </LogoContainer>
      <Bar>
        <Button to="/">
          <NavLeftSvg className="l" />
          <ButtonName>1. Sobre Você</ButtonName>
        </Button>
        <Button to="/sua-marca">
          <NavCenterSvg />
          <ButtonName>2. Sobre sua Marca</ButtonName>
        </Button>
        <Button to="/seu-publico">
          <NavCenterSvg />
          <ButtonName>3. Sobre seu público alvo</ButtonName>
        </Button>
        <Button to="/personalidade">
          <NavCenterSvg />
          <ButtonName>4. Sobre a personalidade</ButtonName>
        </Button>
        <Button to="/orcamento">
          <NavRightSvg className="r" />
          <ButtonName>5. Sobre o orçamento</ButtonName>
        </Button>
      </Bar>
      <MobileBar>
        <Button to={mobileLabels[0][0]}>
          <NavLeftSvg className="l" />
          <ButtonName>{mobileLabels[0][1]}</ButtonName>
        </Button>
        <Button to={mobileLabels[1][0]}>
          <NavCenterSvg />
          <ButtonName>{mobileLabels[1][1]}</ButtonName>
        </Button>
        <Button to={mobileLabels[2][0]}>
          <NavRightSvg className="r" />
          <ButtonName>{mobileLabels[2][1]}</ButtonName>
        </Button>
      </MobileBar>
    </NavBarContainer>
  );
}

export default NavBar;

const NavBarContainer = styled(motion.nav)`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 5rem;
`;

const LogoContainer = styled(Link)`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
`;
const LogoIcon = styled(LogoSvg)`
  width: 5rem;
  fill: ${({ theme }) => theme.color.white};
`;

const Bar = styled.div`
  width: 100%;
  display: grid;
  font-size: 0.9rem;

  grid-template-columns: 15.5% 23% 23% 23% 15.5%;
  @media (max-width: 600px) {
    display: none;
  }
`;

const ButtonName = styled.span`
  width: 87%;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0.9rem;
  position: absolute;
  z-index: 2;
  font-weight: 500;
  text-align: center;
  transition: ${({ theme }) => theme.transition.fast};
`;

const Button = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  aspect-ratio: 5.16;
  pointer-events: none;
  color: ${({ theme }) => theme.color.black};
  transition: ${({ theme }) => theme.transition.fast};

  &:has(+ .active),
  &:has(+ * + .active),
  &:has(+ * + * + .active),
  &:has(+ * + * + * + .active),
  &:has(+ :hover),
  &:has(+ * + :hover),
  &:has(+ * + * + :hover) {
    color: ${({ theme }) => theme.color.white};
    svg {
      fill: ${({ theme }) => theme.color.main.color};
    }
  }

  &:hover {
    color: ${({ theme }) => theme.color.white};

    svg {
      fill: ${({ theme }) => theme.color.main.light};
    }
  }

  &.active {
    color: ${({ theme }) => theme.color.white};

    svg {
      fill: ${({ theme }) => theme.color.main.color};
    }
    &:hover {
      svg {
        fill: ${({ theme }) => theme.color.main.dark};
      }
    }
  }
  svg {
    width: 120%;
    height: 120%;
    overflow: visible;
    position: absolute;
    z-index: 1;
    transform-origin: center;
    transform-box: fill-box;
    fill: ${({ theme }) => theme.color.white};
    pointer-events: none;
    cursor: pointer;
    transition: ${({ theme }) => theme.transition.main};

    * {
      pointer-events: all;
    }
  }

  .l {
    width: 149%;
    height: 149%;
    transform: translateX(-6%);
    & + span {
      transform: translateX(-25%);
    }
  }
  .r {
    width: 149%;
    height: 149%;
    transform: translateX(6%);
    & + span {
      transform: translateX(25%);
    }
  }
`;

const MobileBar = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 28.5% 43% 28.5%;
  grid-template-rows: auto;
  height: 5rem;
  font-size: 1.1rem;

  @media (min-width: 601px) {
    display: none;
  }
`;
