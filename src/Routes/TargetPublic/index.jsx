import { motion } from "framer-motion";
import styled from "styled-components";
import { Title, MotionContainer } from "../../components/Styled";
import Form from "./Form";

function Budget() {
  return (
    <BudgetContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      <Title>
        Quem é seu <b>Púbico alvo</b>?
      </Title>
      <Form />
    </BudgetContainer>
  );
}

const BudgetContainer = styled(MotionContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Budget;
