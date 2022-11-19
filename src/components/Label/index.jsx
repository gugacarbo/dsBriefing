import styled from "styled-components";

function Label({ children, ...props }) {
  return <LabelContainer {...props}>{children}</LabelContainer>;
}

const LabelContainer = styled.label`
  grid-area: ${({ area }) => area};
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr 1fr;
  cursor: pointer;
`;
export default Label;
