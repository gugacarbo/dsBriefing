import { ReactComponent as Logo } from "../assets/SplashScreen/Logo.svg";
import { ReactComponent as Text } from "../assets/SplashScreen/Text.svg";
import styled from "styled-components";
import { motion } from "framer-motion";

export const SplashContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.background};
  transition: ${({ theme }) => theme.transition.x4};
  ${({ done }) =>
    done &&
    `
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  `}
`;

export const StyledLogo = styled(Logo)`
  position: absolute;

  width: 70%;
  height: 70%;
  max-width: 450px;
  max-height: 450px;
  transition: ${({ theme }) => theme.transition.slow};
  stroke-dasharray: 1045;
  stroke-dashoffset: 1045;
  stroke: ${({ theme }) => theme.color.main.color};
  fill: ${({ theme }) => theme.color.white};
  stroke-width: 1.5px;

  @keyframes LoadingLogo {
    0% {
      stroke-dashoffset: 1045;
      filter: drop-shadow(0px 0px 0px ${({ theme }) => theme.color.main.color});
    }
    10% {
      stroke-dashoffset: 1045;
      filter: drop-shadow(0px 0px 0px ${({ theme }) => theme.color.main.color});
    }
    90% {
      stroke-dashoffset: 0;
      filter: drop-shadow(
        0px 0px 10px ${({ theme }) => theme.color.main.color}
      );
    }

    100% {
      stroke-dashoffset: 0;
      filter: drop-shadow(
        0px 0px 10px ${({ theme }) => theme.color.main.color}
      );
    }
  }

  @keyframes LoadedLogo {
    0% {
    }
    100% {
      transform: translate(-50%) scale(0.8);
      stroke-dashoffset: 0;
      filter: drop-shadow(
        0px 0px 10px ${({ theme }) => theme.color.main.color}
      );
    }
  }
  ${({ loaded }) =>
    loaded
      ? `
  animation: LoadedLogo 1s ease-in-out forwards;
  `
      : `
  animation: LoadingLogo 3s alternate cubic-bezier(0.7, 0, 0.49, 0.95)
  infinite;
  `}
`;
export const StyledText = styled(Text)`
  position: absolute;

  width: 90%;
  height: 90%;
  max-width: 550px;
  max-height: 550px;
  transition: 1.4s;
  fill: ${({ theme }) => theme.color.white};
  opacity: 0;

  ${({ loaded }) =>
    loaded &&
    `
  opacity: 1;
  transform: translate(50%); 
  `}
`;
