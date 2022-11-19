import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../../assets/logo.svg";
import { ReactComponent as NavLeftSvg } from "../../assets/nav/left.svg";
import { ReactComponent as NavRightSvg } from "../../assets/nav/right.svg";
import { ReactComponent as NavCenterSvg } from "../../assets/nav/center.svg";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <NavBarContainer>
      <LogoContainer>
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
    </NavBarContainer>
  );
}

export default NavBar;

const NavBarContainer = styled.nav`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 5rem;
`;

const LogoContainer = styled.div`
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonName = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  font-size: 1rem;
  font-weight: 500;
  transition: ${({ theme }) => theme.transition.fast};
`;

const Button = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
  position: relative;
  aspect-ratio: 5;
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
    width: 145%;
    height: 145%;
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
    transform: translateX(2%);
    & + span {
      transform: translateX(-10%);
    }
  }
  .r {
    transform: translateX(-2%);
    & + span {
      transform: translateX(10%);
    }
  }
`;
