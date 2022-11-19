import Slider from "@mui/material/Slider";

import styled, { useTheme } from "styled-components";
import Label from "../Label";
import { LabelTitle } from "../Styled";

function Range({
  title,
  subtitle,
  name,
  min = 0,
  max = 100,
  touched,
  error,
  onChange,
  required,
  value,
  ...props
}) {
  const theme = useTheme();
  return (
    <RangeContainer area={name}>
      <Title>
        {title} {required && `*`}
        {touched && error && <Error>{error}</Error>}
      </Title>
      <StyledRange
        onChange={(e) => {
          onChange(name, e.target.value);
        }}
        name={name}
        defaultValue={
          value && value.length > 0 ? value : [min + max * 0.1, max * 0.9]
        }
        value={value && value.length > 0 ? value : [min + max * 0.1, max * 0.9]}
        min={min}
        max={max}
        getAriaLabel={() => "Temperature range"}
        valueLabelDisplay="auto"
        sx={{
          color: value?.[0] ? theme.color.main.color : theme.color.main.darker,
          "& .MuiSlider-valueLabelOpen": {},
          "& .MuiSlider-thumb:hover": {
            boxShadow: "0px 0px 0px 7px " + theme.color.main.light + "22",
          },
          "& .Mui-active, & .MuiSlider-dragging, & .MuiSlider-active": {
            boxShadow: "0px 0px 0px 12px " + theme.color.main.light + "22",
          },

          "& .MuiSlider-thumb": {
            "&:hover, &.Mui-focusVisible": {
              boxShadow: `0px 0px 0px 8px` + theme.color.main.light + "22",
            },
            "&.Mui-active": {
              boxShadow: `0px 0px 0px 14px` + theme.color.main.light + "22",
            },
          },
        }}
        valueLabelFormat={(v) => {
          let v2 = v;
          if (v <= min) {
            v2 = "Menor ou Igual a " + v;
          }
          if (v >= max) {
            v2 = "Maior ou Igual a " + v;
          }
          return v2;
        }}
        {...props}
      />
      {value?.[0] && (
        <Values>
          {value?.[0] <= min ? "Menor que " : "De "}
          <b>{value?.[0]}</b> {subtitle}{" "}
          {value?.[1] >= max ? "E Maior que " : "a "}
          <b>{value?.[1]}</b> {subtitle}
        </Values>
      )}
    </RangeContainer>
  );
}
const RangeContainer = styled(Label)`
  row-gap: 2rem;
`;

const Values = styled.span`
  font-size: 1.3rem;
  letter-spacing: 0.09rem;
  font-weight: 400;
  width: 100%;
  text-align: center;
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

const StyledRange = styled(Slider)``;

export default Range;
