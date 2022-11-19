import { motion } from "framer-motion";
import styled from "styled-components";
import { Title, MotionContainer } from "../../components/Styled";
import Form from "./Form";

function Personality() {
  return (
    <PersonalityContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      <Title>
        Nos fale sobre a <b>Personalidade da sua marca</b>
      </Title>
      <Form />
    </PersonalityContainer>
  );
}

const PersonalityContainer = styled(MotionContainer)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Personality;
