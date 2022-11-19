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
          <label htmlFor={(name + value).toString()}>
            <CheckboxInput>
              <Field
                {...props}
                type="checkbox"
                name={name}
                value={value.toString()}
                id={(name + value).toString()}
              />
            </CheckboxInput>
            <Name>{value}</Name>
          </label>
        </Option>
      ))}
      {other && (
        <Other>
          <label>
            <CheckboxInput>
              <Field {...props} type="checkbox" name={name} value="Outro" />
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

const OtherInputText = styled(InputText)`
  width: 70%;
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

const Option = styled.div`
  width: 30%;
  min-width: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  label {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    &:hover {
      div:not(:has(input:checked)) {
        ::after {
          background-color: ${({ theme }) => theme.color.main.light};
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
  width: 50%;
  position: relative;
  label {
    width: 30%;
  }
  input[type="text"] {
    width: 100%;
  }
`;

const Name = styled.span`
  font-size: 1.2rem;
`;

const CheckboxContainer = styled.div`
  grid-area: ${({ area }) => area};
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  align-items: flex-start;
`;

const Title = styled(LabelTitle)``;
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
