import styled from "styled-components";

import { AiFillGithub } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";

interface Props {
  className?: string;
}

const OpenSource: React.FC<Props> = ({ className }) => {
  const [countStars, setCountStars] = useState(0);
  useEffect(() => {
    axios
      .get("https://api.github.com/repos/donathanqueiros/roadmap-quiz")
      .then((response) => {
        setCountStars(response.data.stargazers_count);
      });
  }, []);

  return (
    <div className={className}>
      <h1 className="title">Open Source</h1>

      <p className="desc">
        Este projeto é Open Source, você pode contribuir com o projeto no
        Github.
      </p>

      <a
        className="git-button"
        href="https://github.com/donathanqueiros/roadmap-quiz"
        target="_blank"
        rel="noreferrer"
      >
        <button>
          <AiFillGithub size={22} /> <span>Star</span>
        </button>
        <div>
          <span>{countStars}</span>
        </div>
      </a>
    </div>
  );
};

const StyledOpenSource = styled(OpenSource)`
  padding-top: 70px;

  min-height: 313px;
  width: 100%;
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  color: white;

  border-top: 1px solid #2d2d2d;
  border-bottom: 1px solid #2d2d2d;

  .title {
    font-weight: 700;
    font-size: 36px;
  }

  .desc {
    font-size: 18px;
  }

  .git-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;

    button {
      cursor: pointer;
      width: 82px;
      height: 30px;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      gap: 2px;

      span {
        font-weight: bold;
        font-size: 18px;
      }
    }
    div {
      background-color: white;
      color: black;
      border-radius: 4px;
      position: relative;
      span {
        font-weight: bold;
        font-size: 18px;
        padding: 18px 4px;
      }

      &:before {
        content: " ";
        left: -12px;
        top: 6px;
        position: absolute;
        border: 6px solid transparent;
        border-right-color: white;
      }
    }
  }
`;

export default StyledOpenSource;
