import styled from "styled-components";
import { InputText } from "../Styled";
import Label from "../Label";

function Text({ title, name, touched, error, required, ...props }) {
  return (
    <TextContainer area={name}>
      <Title>
        {title} {required && `*`}
        {touched && error && <Error>{error}</Error>}
      </Title>
      <InputText name={name} {...props} required={required} />
    </TextContainer>
  );
}
const TextContainer = styled(Label)``;


const Title = styled.span`
  font-size: 1rem;
  letter-spacing: 0.07rem;
  font-weight: 500;
`;
const Error = styled.span`
  font-size: 1rem;
  letter-spacing: 0.07rem;
  font-weight: 500;
  margin-left: 1rem;
  color: ${({ theme }) => theme.color.main.dark};
`;

export default Text;
