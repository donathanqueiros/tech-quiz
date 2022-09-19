import { FC } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}

const Footer: FC<Props> = ({ className }) => {
  return (
    <footer className={className}>
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          vestibulum a ligula.
        </span>
      </div>
    </footer>
  );
};

const StyledFooter = styled(Footer)`
  display: flex;
  flex-direction: column;
  height: 144px;
  width: 100%;
  padding: 80px 80px;
  justify-content: center;
  gap: 12px;
  color: white;
  background-color: ${(props) => props.theme.colors.primary}20;
`;

export default StyledFooter;
