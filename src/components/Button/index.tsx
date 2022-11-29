import styled from "styled-components";

export default styled.button`
  width: 100%;
  min-height: 48px;
  font-weight: 400;
  font-size: 18px;
  color: white;
  cursor: pointer;

  border-radius: 50px;
  background-color: ${(props) => props.color || props.theme.colors.primary};
  border: none;
`;
