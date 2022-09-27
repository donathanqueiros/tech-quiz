import { FC } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  percent?: number;
  color?: string;
}

const ProgressBar: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="progress-bar">
        <div className="progress-bar__progress"></div>
      </div>
    </div>
  );
};

const StyledProgressBar = styled(ProgressBar)`
  width: 100%;
  height: 10px;
  background-color: ${({ color }) => color}22;
  border-radius: 8px;
  overflow: hidden;

  .progress-bar {
    width: 100%;
    height: 100%;
    background-color: ${({ color }) => color}22;
    border-radius: 8px;
    overflow: hidden;

    .progress-bar__progress {
      width: ${({ percent }) => percent}%;
      height: 100%;
      background-color: ${({ color }) => color};
      border-radius: 8px;
      overflow: hidden;
      transition: 0.5s;
    }
  }
`;

export default StyledProgressBar;
