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
        <Button
          onClick={() => {
            console.log("left");
          }}
          to="/"
        >
          <NavLeftSvg className="l" />
        </Button>
        <Button
          onClick={() => {
            console.log("left");
          }}
          to="/sua-marca"
        >
          <NavCenterSvg />
        </Button>
        <Button
          onClick={() => {
            console.log("left");
          }}
          to="/seu-publico"
        >
          <NavCenterSvg />
        </Button>
        <Button
          onClick={() => {
            console.log("left");
          }}
          to="/personalidade"
        >
          <NavCenterSvg />
        </Button>
        <Button
          onClick={() => {
            console.log("left");
          }}
          to="/orcamento"
        >
          <NavRightSvg className="r" />
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

const Button = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
  position: relative;
  aspect-ratio: 5;
  pointer-events: none;

  &:has(+ .active),
  &:has(+ * + .active),
  &:has(+ * + * + .active),
  &:has(+ * + * + * + .active) {
    svg {
      fill: ${({ theme }) => theme.color.main.color};
    }
  }
  &.active {
    svg {
      fill: ${({ theme }) => theme.color.main.color};
    }
  }
  svg {
    width: 145%;
    height: 145%;
    overflow: visible;
    position: absolute;
    z-index: 1;
    fill: ${({ theme }) => theme.color.white};
    pointer-events: none;
    cursor: pointer;
    transition: ${({ theme }) => theme.transition.main};

    * {
      pointer-events: all;
    }
    &:hover {
      fill: ${({ theme }) => theme.color.main.light};
    }
  }
  .l {
    transform: translateX(2%);
  }
  .r {
    transform: translateX(-2%);
  }
`;
