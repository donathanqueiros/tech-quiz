import { FC } from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
const Wrapper: FC<Props> = ({ children, className, style }) => (
  <StyledWrapper className={"wrapper " + className} style={style}>
    {children}
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  max-width: 1280px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0px 24px;
  }
`;

export default Wrapper;
