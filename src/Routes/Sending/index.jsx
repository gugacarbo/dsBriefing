import { useContext, useEffect } from "react";
import styled from "styled-components";
import { MotionContainer } from "../../components/Styled";
import { ReactComponent as LogoSvg } from "../../assets/logo.svg";

import BrandBriefingContext from "../../context/BrandBriefingContext";
import BudgetBriefingContext from "../../context/BudgetBriefingContext";
import ClientBriefingContext from "../../context/ClientBriefingContext";
import PersonalityBriefingContext from "../../context/PersonalityBriefingContext";
import TargetPublicBriefingContext from "../../context/TargetPublicBriefingContext";
import { useNavigate } from "react-router-dom";

import api from "../../util/api";

function Sending() {
  const { clientFormData, clientValidation } = useContext(
    ClientBriefingContext
  );

  const { brandFormData, brandValidation } = useContext(BrandBriefingContext);

  const { targetPublicFormData, targetPublicValidation } = useContext(
    TargetPublicBriefingContext
  );

  const { personalityFormData, personalityValidation } = useContext(
    PersonalityBriefingContext
  );
  const { budgetFormData, budgetValidation } = useContext(
    BudgetBriefingContext
  );

  async function ValidateAll() {
    let ClientValidation = await clientValidation(clientFormData);
    if (Object.keys(ClientValidation) != 0) return "/";

    let BrandValidation = await brandValidation(brandFormData);
    if (Object.keys(BrandValidation) != 0) return "/sua-marca";

    let TargetPublicValidation = await targetPublicValidation(
      targetPublicFormData
    );
    if (Object.keys(TargetPublicValidation) != 0) return "seu-publico";

    let PersonalityValidation = await personalityValidation(
      personalityFormData
    );
    if (Object.keys(PersonalityValidation) != 0) return "personalidade";

    let BudgetValidation = await budgetValidation(budgetFormData);
    if (Object.keys(BudgetValidation) != 0) return "/orcamento";

    try {
      const response = await api.post("enviarBriefing.php", {
        clientFormData,
        brandFormData,
        targetPublicFormData,
        personalityFormData,
        budgetFormData,
      });
      return "/enviado";
    } catch {
      return "/erro";
    }
  }

  const navigate = useNavigate();
  useEffect(() => {
    ValidateAll().then((r) => navigate(r));
  }, []);
  return (
    <SendingContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Logo />
    </SendingContainer>
  );
}

const SendingContainer = styled(MotionContainer)`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  position: fixed;
  background-color: ${({ theme }) => theme.nackground};

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
  stroke: ${({ theme }) => theme.color.main.dark};
  overflow: visible;
  animation: Loading linear 5s infinite;
  fill: transparent;
  @media (max-width: 600px) {
    width: 80%;
  }

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

export default Sending;
