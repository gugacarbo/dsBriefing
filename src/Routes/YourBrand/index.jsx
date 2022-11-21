import { motion } from "framer-motion";
import styled from "styled-components";
import { Title, MotionContainer } from "../../components/Styled";
import Form from "./Form";

function YourBrand() {
  return (
    <YourBrandContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      <Title>
        Agora nos fale sobre sua <b>Marca</b>
      </Title>
      <Form />
    </YourBrandContainer>
  );
}

const YourBrandContainer = styled(MotionContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default YourBrand;
