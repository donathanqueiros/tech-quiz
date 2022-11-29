import { FC } from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";

interface Props {
  className?: string;
}

const Footer: FC<Props> = ({ className }) => {
  return (
    <footer className={className}>
      <div>
        <h1>TechQUIZ</h1>
      </div>
      <div>
        <span>
          Acesse o repositório no Github &nbsp;
          <span className="git-button">
            <a href="" target="_blank">
              <AiFillGithub size={22} fill="black" />
              github
            </a>
          </span>
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

  h1 {
    color: ${(props) => props.theme.colors.primary};
  }

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${(props) => props.theme.colors.secondary};

    font-size: 14px;
  }

  .git-button {
    width: fit-content;
    background: white;
    display: flex;
    align-items: center;
    padding: 2px;
    border-radius: 8px;
    gap: 8px;
    a {
      display: flex;
      align-items: center;
      color: black;
      text-decoration: none;
      font-weight: 700;
      font-size: 14px;
    }
  }
`;

export default StyledFooter;
