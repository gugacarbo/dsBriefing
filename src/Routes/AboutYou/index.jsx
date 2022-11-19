import styled from "styled-components";
import Form from "./Form";
import { motion } from "framer-motion";
import { Title } from "../../components/Styled";

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

const AboutYouContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default AboutYou;