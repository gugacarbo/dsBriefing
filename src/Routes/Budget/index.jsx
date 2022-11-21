import { motion } from "framer-motion";
import styled from "styled-components";
import { Title, MotionContainer } from "../../components/Styled";
import Form from "./Form";

function TargetPublic() {
  return (
    <TargetPublicContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      <Title>
        Nos conte sobre seu <b>orçamento para o projeto</b>
      </Title>
      <Form />
    </TargetPublicContainer>
  );
}

const TargetPublicContainer = styled(MotionContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default TargetPublic;
