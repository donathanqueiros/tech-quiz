import StyledModal from "components/Modal";
import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";
import folderIcon from "assets/Icone.svg";
import bg from "assets/bg.png";

interface Props {
  open?: boolean;
  onCancel?: () => void;
  className?: string;
}

const ModalSelectLevel: FC<Props> = ({ className, open, onCancel }) => {
  return (
    <StyledModal>
      <div className={className}>
        {/* <Image src={folderIcon.src} /> */}

        <h1>Selecione o nível</h1>

        <div className="levels">
          <button onClick={onCancel}>Iniciante</button>
          <button onClick={onCancel}>Intermediário</button>
          <button onClick={onCancel}>Avançado</button>
          <button onClick={onCancel}>Todos</button>
        </div>

        {/* <button onClick={onCancel}>x</button> */}
      </div>
    </StyledModal>
  );
};

const StyledModalSelectLevel = styled(ModalSelectLevel)`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  border-radius: 8px;
  border-top: 8px solid ${({ theme }) => theme.colors.primary};
  width: 333px;
  padding-bottom: 40px;

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    margin-top: 48px;
    margin-bottom: 24px;
  }
  .levels {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;

    button {
      width: 200px;
      height: 49px;
      background: rgba(53, 11, 102, 0.9);
      border-radius: 50px;
      cursor: pointer;

      font-weight: 400;
      font-size: 18px;
      text-align: center;
    }
  }
`;

export default StyledModalSelectLevel;
