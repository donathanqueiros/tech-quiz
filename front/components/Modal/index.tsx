import { FC, ReactNode, useEffect } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  children?: ReactNode;
  open?: boolean;
  onCancel?: () => void;
  onOk?: () => void;
}

const Modal: FC<Props> = ({ children, className, open, onCancel, onOk }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return <div className={className}>{children}</div>;
};

const StyledModal = styled(Modal)`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default StyledModal;
