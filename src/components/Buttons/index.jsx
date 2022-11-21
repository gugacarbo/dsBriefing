import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

function Buttons({ onClick, to, back, validateForm, last }) {
  const navigate = useNavigate();
  return (
    <ButtonsContainer>
      {back && (
        <Button back={1} to={back} as={Link}>
          Voltar
        </Button>
      )}
      <Button
        onClick={() => {
          // onClick();
          validateForm().then((e) => {
            if (Object.keys(e).length > 0) {
              var E = Object.keys(e)[0];
              var inp = document.querySelector(`[name="${E}"`);
              inp &&
                inp.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "nearest",
                });
            } else {
              navigate(to);
            }
          });
        }}
      >
        {last ? "Enviar" : "Próximo"}
      </Button>
    </ButtonsContainer>
  );
}

const ButtonsContainer = styled.div`
  grid-area: buttons;
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 10rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5rem;
  @media (max-width: 600px) {
    gap: 0;
    justify-content: space-around;
    padding-bottom: 5rem;
  }
`;

const Button = styled.div`
  border: none;
  background-color: transparent;
  outline: none;
  border-radius: 5rem;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;

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
  @media (max-width: 800px) {
    padding: 0.3rem 0;
    width: 30%;
  }
  @media (max-width: 600px) {
    padding: 0.3rem 0;
    width: 40%;
  }
`;

export default Buttons;
