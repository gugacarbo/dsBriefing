import { useState } from "react";
import styled from "styled-components";
import { InputText, LabelTitle, StyledError } from "../Styled";
import Label from "../Label";
import { Field } from "formik";

function Radio({
  name,
  title,
  options,
  required,
  other = false,
  otherVal,
  otherOnChange,
  otherName,
  otherError,
  ...props
}) {
  return (
    <RadioContainer area={name}>
      <Title>
        {title}
        {required && ` *`}
        {props.error && <Error>{props.error}</Error>}
      </Title>
      {options.map((value, index, array) => (
        <Option key={index}>
          <RadioInput>
            <Field
              {...props}
              type="radio"
              name={name}
              required={required}
              value={value[1]}
            />
          </RadioInput>
          <OptionName>{value[0]} </OptionName>
        </Option>
      ))}
      {other && (
        <Option>
          <RadioInput>
            <Field
              {...props}
              type="radio"
              name={name}
              value="Outro"
              required={required}
            />
          </RadioInput>
          <OptionName>
            <OptionOtherName>Outro: Qual?</OptionOtherName>
            <OtherInput
              type="text"
              name={otherName}
              error={otherError && otherError}
              value={otherVal}
              onChange={otherOnChange}
            />
            {otherError && <Error>{otherError}</Error>}
          </OptionName>
        </Option>
      )}
    </RadioContainer>
  );
}

const OtherInput = styled(InputText)`
  width: 90%;
  ${({ error, theme }) =>
    error &&
    `
  border-color: ${theme.color.yellow};

    
    `}
`;

const RadioContainer = styled.div`
  grid-area: ${({ area }) => area};

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Error = styled(StyledError)`
  font-size: 1rem;
  letter-spacing: 0.07rem;
  font-weight: 500;
  margin-left: 1rem;
  color: ${({ theme }) => theme.color.main.dark};
`;

const Title = styled(LabelTitle)`
  width: 100%;
`;

const Option = styled.label`
  width: 98%;
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const OptionName = styled.span`
  display: flex;
  width: 100%;
  font-size: 1rem;
`;
const OptionOtherName = styled.span`
  display: flex;
  width: 10%;
  white-space: nowrap;
`;

const RadioInput = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.color.main.light};
  transition: ${({ theme }) => theme.transition.main};

  position: relative;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;

    border-radius: 50%;
    transition: ${({ theme }) => theme.transition.main};
  }
  input {
    position: absolute;
    opacity: 0;
  }
  &:has(input:checked) {
    border: 1px solid ${({ theme }) => theme.color.main.darker};

    &::after {
      border: 3px solid ${({ theme }) => theme.background};
      background-color: ${({ theme }) => theme.color.main.color};
    }
  }
`;

export default Radio;
