import { FC } from "react";
import styled from "styled-components";
import { IoIosArrowRoundBack } from "react-icons/io";
import Wrapper from "components/Wrapper";

interface Props {
  title: string;
  color: string;
  onClick: () => void;
  className?: string;
}

const Navigation: FC<Props> = ({ onClick, title, className }) => (
  <div className={className}>
    <Wrapper>
      <button onClick={onClick}>
        <IoIosArrowRoundBack color="white" size={28} />
      </button>
      <h3>{title}</h3>
    </Wrapper>
  </div>
);
const StyledNavigation = styled(Navigation)`
  width: 100%;
  background-color: ${(props) => props.color};
  height: 30px;
  display: flex;
  justify-content: center;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  h3 {
    margin: auto;
    font-weight: 700;
    font-size: 18px;
  }

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default StyledNavigation;
