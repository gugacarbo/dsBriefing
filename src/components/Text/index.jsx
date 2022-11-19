import styled from "styled-components";
import { InputText, LabelTitle } from "../Styled";
import Label from "../Label";

function Text({ title, name, touched, error, required, ...props }) {
  return (
    <TextContainer area={name}>
      <Title>
        {title} {required && `*`}
        {touched && error && <Error>{error}</Error>}
      </Title>
      <InputText type="text" name={name} {...props} />
    </TextContainer>
  );
}
const TextContainer = styled(Label)`
  gap: 1rem;
`;

const Title = styled(LabelTitle)`
  font-size: 1.1rem;
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
