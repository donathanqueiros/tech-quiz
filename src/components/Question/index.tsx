import styled from "styled-components";

const Question = ({ className, question }: any) => {
  return (
    <div className={className}>
      <h1>{question}</h1>
    </div>
  );
};

const StyledQuestion = styled(Question)`
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 400;
    font-size: 18px;
  }
`;

export default StyledQuestion;
