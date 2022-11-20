import { Field } from "formik";
import { motion } from "framer-motion";
import styled from "styled-components";

export const InputText = styled(Field)`
  border: none;
  outline: none;
  background-color: transparent;
  border-bottom: 2px solid ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.white};
  font-size: 1.3rem;
  padding: 0.1rem 0.5rem;
  transition: ${({ theme }) => theme.transition.x2};
  &:focus {
    border-color: ${({ theme }) => theme.color.main.color};
  }
  ${({error, theme}) =>
    error &&
    `
    border-color: ${theme.color.red}
      `}
`;

export const LabelTitle = styled.span`
  font-size: 1.1rem;
  letter-spacing: 0.07rem;
  font-weight: 500;
  width: 100%;
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
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  overflow: hidden;
  margin: 5rem 0;
`;

export const MotionContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-x: hidden;
`;

export const StyledError = styled.span`
  font-size: 1rem;
  transition: ${({ theme }) => theme.transition.main};
  white-space: nowrap;
  letter-spacing: 0.07rem;
  font-weight: 500;
  margin-left: 1rem;
  color: ${({ theme }) => theme.color.main.dark};
`;
