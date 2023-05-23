import styled from "styled-components";

interface CardTopicProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: string;
}

const CardTopic = styled.div<CardTopicProps>`
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  background-color: ${(props) => props.color || props.theme.colors.primary};
  min-height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  color: white !important;
`;

export default CardTopic;
