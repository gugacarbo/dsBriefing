import styled from "styled-components";
import { Field } from "formik";
import { InputText, LabelTitle, StyledError } from "../Styled";
import { useEffect, useRef, useState } from "react";

function Checkbox({
  title,
  options,
  name,
  touched,
  error,
  required,
  value,
  other = false,
  otherOnChange,
  otherName,
  otherError,
  otherVal,
  ...props
}) {
  const [useOther, setUseOther] = useState(false);

  useEffect(() => {
    if (!value.includes("Outro")) {
      otherOnChange(otherName, "");
    } else {
      otherOnChange(otherName, otherVal);
    }
  }, [value]);

  return (
    <CheckboxContainer area={name}>
      <Title>
        {title} {required && `*`}
        {error && <Error>{error}</Error>}
      </Title>
      {options.map((value, index, array) => (
        <Option key={index}>
          <label htmlFor={("Ckb" + name + value).replace(/[^a-zA-Z0-9]/g, "")}>
            <CheckboxInput>
              <Field
                {...props}
                type="checkbox"
                name={name}
                value={value.toString()}
                id={("Ckb" + name + value).replace(/[^a-zA-Z0-9]/g, "")}
              />
            </CheckboxInput>
            <Name>{value}</Name>
          </label>
        </Option>
      ))}
      {other && (
        <Other>
          <label
            htmlFor={("Ckb" + name + "Outro").replace(/[^a-zA-Z0-9]/g, "")}
          >
            <CheckboxInput>
              <Field
                {...props}
                type="checkbox"
                name={name}
                value="Outro"
                id={("Ckb" + name + "Outro").replace(/[^a-zA-Z0-9]/g, "")}
              />
            </CheckboxInput>
            <Name>Outro: Qual?</Name>
          </label>
          <OtherInputText
            active={value.includes("Outro") ? 1 : 0}
            value={otherVal}
            error={otherError}
            name={otherName}
            onChange={otherOnChange}
          />

          {otherError && <Error>{otherError}</Error>}
        </Other>
      )}
    </CheckboxContainer>
  );
}

const CheckboxContainer = styled.div`
  grid-area: ${({ area }) => area};
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  overflow: hidden;
  @media (max-width: 600px) {
    width: 90%;
    margin: 0 auto;
  }
`;

const Option = styled.div`
  width: 100%;
  max-width: calc(33% - 2rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    max-width: 45%;
  }

  label {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    &:hover {
      div:not(:has(input:checked)) {
        ::after {
          background-color: ${({ theme }) => theme.color.main.light + "55"};
        }
      }
      div:has(input:checked) {
        ::after {
          background-color: ${({ theme }) => theme.color.main.darker};
        }
      }
    }
  }
`;
const Other = styled(Option)`
  max-width: 90%;
  margin: 0 auto;
  margin-top: 1rem;
  gap: 1rem;
  position: relative;
  label {
    width: auto;
  }
`;

const OtherInputText = styled(InputText)`
  width: inherit;
  flex: 1;
  transition: ${({ theme }) => theme.transition.fast};
  border-color: ${({ theme }) => theme.color.main.gray};
  color: ${({ theme }) => theme.color.mediumGray};

  ${({ active, theme }) =>
    active &&
    `
  border-color: ${theme.color.main.light};
  color: ${theme.color.white};
    
    `}
  ${({ error, theme }) =>
    error &&
    `
  border-color: ${theme.color.yellow};
  width: auto;

    
    `}
`;

const Name = styled.span`
  font-size: 1.3rem;
`;

const Title = styled(LabelTitle)`
  width: 100%;
`;
const Error = styled(StyledError)`
  font-size: 1rem;
  transition: ${({ theme }) => theme.transition.main};
  white-space: nowrap;
  letter-spacing: 0.07rem;
  font-weight: 500;
  margin-left: 1rem;
  color: ${({ theme }) => theme.color.main.dark};
`;

const CheckboxInput = styled.div`
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
  @media (max-width: 600px) {
    width: 1.4rem;
    height: 1.4rem;
  }
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

export default Checkbox;
