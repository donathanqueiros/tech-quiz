import Button from "components/Button";
import StyledFolderCard from "components/FolderCard";
import { useRoad } from "contexts/RoadContext";
import { FC } from "react";
import styled, { useTheme } from "styled-components";

interface Props {
  className?: string;
  onPlayAgain?: () => void;
  onShowResult?: () => void;
  color?: string;
  rightAnswers: number;
  wrongAnswers: number;
}

const CardResult: FC<Props> = ({
  onPlayAgain,
  onShowResult,
  rightAnswers,
  wrongAnswers,
}) => {
  const { color } = useRoad().road;
  const theme = useTheme();

  return (
    <Content color={color}>
      <StyledFolderCard color={color}>
        <span>!</span>
      </StyledFolderCard>

      <h3>Bom Trabalho!</h3>

      <div className="results">
        <StyledFolderCard color={theme.colors.primary} 
        height={"63px"}
        >
          <span>{rightAnswers + wrongAnswers}</span>
          <span>Questões</span>
        </StyledFolderCard>
        <StyledFolderCard color="rgba(47, 152, 108, 0.9)">
          <span>{rightAnswers}</span>
          <span>Corretas</span>
        </StyledFolderCard>
        <StyledFolderCard color="rgba(232, 59, 59, 0.9)">
          <span>{wrongAnswers}</span>
          <span>Erradas</span>
        </StyledFolderCard>
      </div>
      <div className="actions">
        <Button onClick={onShowResult}>Analise de resultado</Button>
        <Button onClick={onPlayAgain}>Jogar de novo</Button>
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
  border-top: 8px solid ${(props) => props.color};

  padding-bottom: 40px;

  & > ${StyledFolderCard} {
    position: absolute;
    top: -15px;

    span {
      font-weight: 700;
      font-size: 36px;
    }
  }

  h3 {
    font-size: 24px;
    font-weight: 500;
    color: ${(props) => props.color};
    margin-top: 46px;
    margin-bottom: 26px;
  }

  .results {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 24px;
    margin-bottom: 24px;

    ${StyledFolderCard} {
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      font-weight: 400;
      font-size: 14px;

      span:first-child {
        font-weight: 700;
        font-size: 20px;
      }
    }
  }

  .actions {
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

export default CardResult;
