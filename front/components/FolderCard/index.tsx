import Folder from "components/Icons/Folder";
import { FC } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  color?: string;
  children: React.ReactNode;
  width?: string;
  height?: string;
}

const FolderCard: FC<Props> = ({ color, className, children }) => {
  return (
    <span className={className}>
      <Folder color={color} />
      <div>{children}</div>
    </span>
  );
};

const StyledFolderCard = styled(FolderCard)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || "71px"};
  height: ${(props) => props.height || "auto"};
  ${Folder} {
    position: absolute;
    z-index: 1;

    svg {
      width: ${(props) => props.width || "71px"};

      height: ${(props) => props.height || "auto"};
    }
  }
  div {
    color: white;
    z-index: 2;
  }
`;

export default StyledFolderCard;
