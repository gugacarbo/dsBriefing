import styled from "styled-components";
import { InputText, LabelTitle } from "../Styled";
import Label from "../Label";

function Text({ title, name, touched, error, required, ...props }) {
  return (
    <TextContainer area={name}>
      <Title>
        {title}
        {required && <Req error={props.value == ""}>*</Req>}{" "}
        {touched && error && <Error>{error}</Error>}
      </Title>
      <InputText
        type="text"
        placeholder={error}
        error={error}
        name={name}
        {...props}
      />
    </TextContainer>
  );
}
const TextContainer = styled(Label)`
  gap: 1rem;
  transition: ${({ theme }) => theme.transition.main};
`;

const Title = styled(LabelTitle)`
  font-size: 1.1rem;
  letter-spacing: 0.07rem;
  font-weight: 500;
  transition: ${({ theme }) => theme.transition.main};
`;
const Req = styled.b`
  color: ${({ theme, error }) =>
    error ? theme.color.main.light : theme.color.white};
  transition: ${({ theme }) => theme.transition.main};
`;

const Error = styled.span`
  font-size: 1rem;
  letter-spacing: 0.07rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color.main.dark};
`;

export default Text;
