import Folder from "components/Icons/Folder";
import { useRoad } from "contexts/RoadContext";
import { FC } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  onPlayAgain?: () => void;
  onShowResult?: () => void;
  color?: string;
}

const CardResult: FC<Props> = ({ onPlayAgain, onShowResult }) => {
  const { color } = useRoad().road;

  return (
    <Content color={color}>
      <span className="icon-text">
        <Folder color={color} />
        <span>!</span>
      </span>

      <h3>Bom Trabalho!</h3>

      <div className="results">
        <span>icon</span>
        <span>icon</span>
        <span>icon</span>
      </div>
      <div className="actions">
        <button onClick={onShowResult}>Analise de resultado</button>
        <button onClick={onPlayAgain}>Jogar de novo</button>
      </div>
    </Content>
  );
};

const Content = styled.div<{ color?: string }>`
  position: relative;
  max-width: 333px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-top: 4px solid ${(props) => props.color};

  .icon-text {
    position: absolute;
    ${Folder} {
      position: absolute;

      z-index: 1;
    }
    span {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      position: absolute;
      z-index: 2;

      font-weight: 700;
      font-size: 36px;

      text-align: center;
    }
  }

  h3 {
    font-size: 24px;
    font-weight: 500;
    color: ${(props) => props.color};
    margin: 14px 0px;
  }

  .results {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }

  .actions {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }
`;

export default CardResult;
