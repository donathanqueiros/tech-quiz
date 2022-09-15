import { FC } from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
const Wrapper: FC<Props> = ({ children, className, style }) => (
  <div className={className} style={style}>
    {children}
  </div>
);

const StyledWrapper = styled(Wrapper)`
  background-color: red !important;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 1280px;
  width: 100%;
`;

export default Wrapper;
