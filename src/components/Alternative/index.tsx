import dynamic from "next/dynamic";
import { FC } from "react";
import styled from "styled-components";
const Editor = dynamic(
  () => import("@donathanqueiros/tech-quiz-editor").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);
interface Props {
  className?: string;
  prefix?: string;
  content?: string;
  color?: string;
  status?: "correct" | "incorrect" | "default";
  onClick?: () => void;
}

const Alternative: FC<Props> = ({
  prefix,
  content,
  className,
  status,
  onClick,
}) => {
  return (
    <div className={className + " " + status} onClick={onClick}>
      <div className="prefix">
        <span>{prefix}</span>
      </div>

      <span className="content">
        <Editor value={content} readOnly />
      </span>
    </div>
  );
};

const StyledAlternative = styled(Alternative)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 24px;
  border-radius: 50px;
  background-color: ${({ color }) => color}22;
  border: 2px solid ${({ color }) => color};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: 100%;

  &:hover {
    transform: scale(1.05);
  }

  .prefix {
    min-width: 31px;
    height: 31px;
    margin-right: 32px;

    border-radius: 50px;
    background-color: ${({ color }) => color};
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 700;
    font-size: 24px;
  }

  .content {
    font-weight: 400;
    font-size: 18px;
    margin-right: auto;
    margin-left: auto;
  }

  //compare status
  &.correct {
    background-color: #2f986c22;
    border: 2px solid #2f986c;

    .prefix {
      background-color: #2f986c;
    }
  }

  &.incorrect {
    background-color: #e83b3b33;
    border: 2px solid #e83b3b;

    .prefix {
      background-color: #e83b3b;
    }
  }
`;

export default StyledAlternative;
