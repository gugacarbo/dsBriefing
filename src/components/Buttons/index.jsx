import { Link } from "react-router-dom";
import styled from "styled-components";

function Buttons({ to, back }) {
  return (
    <ButtonsContainer>
      {back && (
        <Button back={1} to={back}>
          Voltar
        </Button>
      )}
      <Button to={to}>Próximo</Button>
    </ButtonsContainer>
  );
}

const ButtonsContainer = styled.div`
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 10rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5rem;
`;

const Button = styled(Link)`
  border: none;
  background-color: transparent;
  outline: none;
  border-radius: 5rem;
  padding: 0.3rem 4rem;
  font-size: 1.3rem;
  border: 2px solid
    ${({ theme, back }) => (back ? theme.color.white : theme.color.main.color)};
  color: ${({ theme, back }) =>
    back ? theme.color.white : theme.color.main.color};
  transition: ${({ theme }) => theme.transition.main};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme, back }) =>
      back ? theme.color.white : theme.color.main.color};
    color: ${({ theme, back }) =>
      back ? theme.color.black : theme.color.white};
  }
`;

export default Buttons;
