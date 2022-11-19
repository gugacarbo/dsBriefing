import { motion } from "framer-motion";
import styled from "styled-components";

export const InputText = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  border-bottom: 2px solid ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.white};
  font-size: 1.3rem;
  padding: 0.1rem 0.5rem;
`;

export const Title = styled.h2`
  width: 100%;
  font-size: 3rem;
  color: ${({ theme }) => theme.color.white};
  letter-spacing: 0.08rem;
  b {
    color: ${({ theme }) => theme.color.main.color};
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 5rem;
  margin: 5rem 0;
`;

export const MotionContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
