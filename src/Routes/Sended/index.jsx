import { useContext, useEffect } from "react";
import styled from "styled-components";
import { MotionContainer } from "../../components/Styled";
import { ReactComponent as LogoSvg } from "../../assets/logo.svg";

import api from "../../util/api";
import { Link } from "react-router-dom";

function Sended() {
  return (
    <SendedContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      Em viado
      <Link to="/">Voltar</Link>
    </SendedContainer>
  );
}

const SendedContainer = styled(MotionContainer)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  font-size: 2rem;

  background-color: ${({ theme }) => theme.background};
  a {
    color: ${({ theme }) => theme.color.white};
    font-size: 3rem;
  }
  top: 0;
  left: 0;
`;

const Logo = styled(LogoSvg)`
  width: 50%;
  margin: auto;
  stroke-width: 2px;
  stroke-dasharray: 1045;

  stroke-dashoffset: 1045;

  stroke-linecap: round;
  stroke: ${({ theme }) => theme.color.main.light};
  overflow: visible;
  animation: Loading ease-in-out 3s infinite;
  fill: transparent;

  @keyframes Loading {
    0% {
      stroke-width: 0px;
    }

    25% {
      ${({ theme }) => `
      filter: drop-shadow(0 0 10px ${theme.color.main.color});
      `}
      stroke-dashoffset: 1045;
      stroke-width: 0px;
    }
    50% {
      ${({ theme }) => `
      filter: drop-shadow(0 0 20px ${theme.color.main.color});
      `}
      fill: ${({ theme }) => theme.color.main.color};
      stroke-dashoffset: 0;
      stroke-width: 2px;
    }
    75% {
      ${({ theme }) => `
      filter: drop-shadow(0 0 10px ${theme.color.main.color});
      `}

      stroke-width: 0.5px;
      stroke-dashoffset: -1045;
    }

    100% {
      stroke-dashoffset: -1045;
      stroke-width: 0px;
    }
  }
`;

export default Sended;
