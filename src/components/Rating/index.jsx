import styled from "styled-components";
import Label from "../Label";
import MiuRating from "@mui/material/Rating";
import { ReactComponent as CoinsSvg } from "../../assets/coins.svg";
import { LabelTitle } from "../Styled";
function Rating({
  title,
  color = "yellowGold",
  name,
  touched,
  error,
  required,
  onChange,
  value,
  ...props
}) {
  return (
    <RatingContainer area={name}>
      <Title>
        {title}{required && `*`}
        {error && <Error>{error}</Error>}
      </Title>
      <Values>
        <StyledRating
          icon={<CoinsIcon color={color} />}
          emptyIcon={<CoinsIcon color="mediumGray" />}
          size="large"
          name={name}
          required={required}
          onChange={(event, newValue) => {
            onChange(name, newValue);
          }}
          value={value}
          {...props}
        />
        <span>{value}</span>
      </Values>
    </RatingContainer>
  );
}
const CoinsIcon = styled(CoinsSvg)`
  width: 2.5rem;
  height: 2.5rem;
  fill: ${({ theme, color }) => theme.color[color]};
  transition: ${({ theme }) => theme.transition.main};
`;
const RatingContainer = styled.div`
  grid-area: ${({ area }) => area};
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

const StyledRating = styled(MiuRating)`
  label {
    padding: 0.5rem;
  }
`;

const Values = styled.span`
  font-size: 1.3rem;
  letter-spacing: 0.09rem;
  font-weight: 400;
  width: 100%;
  display: flex;
  align-items: center;
  b {
    color: ${({ theme }) => theme.color.main.color};
  }
`;

const Title = styled(LabelTitle)`
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

export default Rating;
