import styled from "styled-components";
import Form from "./Form";
import { MotionContainer, Title } from "../../components/Styled";

function AboutYou() {
  return (
    <AboutYouContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      <Title>
        Nos fale sobre <b>Você</b>
      </Title>
      <Form />
    </AboutYouContainer>
  );
}

const AboutYouContainer = styled(MotionContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default AboutYou;
