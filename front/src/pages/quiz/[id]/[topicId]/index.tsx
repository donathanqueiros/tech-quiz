import StyledAlternative from "components/Alternative";
import StyledNavigation from "components/Navigation";
import ProgressBar from "components/ProgressBar";
import StyledQuestion from "components/Question";
import Wrapper from "components/Wrapper";
import { FC, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import bg from "assets/bg.png";
import { GetServerSideProps } from "next";
import { Road } from "data/road";
import { getQuiz } from "services/quizService";
import { useRoad } from "contexts/RoadContext";
import CardResult from "components/CardResult";
import { useRouter } from "next/router";
import StyledFolderCard from "@/components/FolderCard";

interface Props {
  className?: string;
  road: Road;
}

interface Awnser {
  isAnswered?: boolean;
  alternativeId?: number;
}

const Quiz: FC<Props> = ({ className, road }) => {
  const topic = road.topics[0];
  const [percent, setPercent] = useState(50);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answers, setAnswers] = useState<Awnser[]>(
    topic.questions.map(() => ({ isAnswered: false }))
  );

  const { asPath, push } = useRouter();
  const [isFinished, setIsFinished] = useState(false);
  const { color } = road;
  const { questions } = topic;
  const [showResults, setShowResults] = useState(false);

  const prefix = ["A", "B", "C", "D"];

  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        nextQuestion();
      } else if (event.key === "ArrowLeft") {
        prevQuestion();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [questionNumber]);

  useEffect(() => {
    button.current?.addEventListener("animationend", (e: AnimationEvent) => {
      if (e.animationName === "fadeOutRight") {
        button.current?.classList.add("none");
      }
    });
    button.current?.addEventListener("animationstart", (e: AnimationEvent) => {
      if (e.animationName === "fadeInRight") {
        button.current?.classList.remove("none");
      }
    });
  }, []);

  const nextQuestion = () => {
    questionNumber < topic.questions.length - 1 &&
      setQuestionNumber((prev) => prev + 1);
  };

  const prevQuestion = () => {
    questionNumber > 0 && setQuestionNumber((prev) => prev - 1);
  };

  const handleFinish = () => {
    setShowResults(true);
  };

  const handleOnPlayAgain = () => {
    resetGame();
    push(asPath);
  };

  const resetGame = () => {
    setQuestionNumber(0);
    setIsFinished(false);
    setShowResults(false);
    setAnswers(topic.questions.map(() => ({ isAnswered: false })));
  };

  const handleOnShowResult = () => {
    setShowResults(false);
    setQuestionNumber(0);
  };

  useEffect(() => {
    setPercent((questionNumber / topic.questions.length) * 100);
  }, [questionNumber]);

  useEffect(() => {
    if (answers.every((answer) => answer.isAnswered)) {
      setIsFinished(true);
    }
  }, [answers]);

  if (topic.questions.length === 0) {
    return <div>Conteudo ainda não disponivel</div>;
  }

  return (
    <div className={className}>
      <StyledNavigation color={color} title={"Frontend"} onClick={() => null} />
      <Wrapper>
        <ProgressBar color={color} percent={percent} />
        {showResults ? (
          <CardResult
            rightAnswers={
              topic.questions.filter(
                (question, index) =>
                  question.answerId === answers[index].alternativeId
              ).length
            }
            wrongAnswers={
              topic.questions.filter(
                (question, index) =>
                  question.answerId !== answers[index].alternativeId
              ).length
            }
            onPlayAgain={handleOnPlayAgain}
            onShowResult={handleOnShowResult}
          />
        ) : (
          <>
            <StyledFolderCard width="71px" height="53px" color={color}>
              {questionNumber + 1}
            </StyledFolderCard>

            <StyledQuestion question={questions[questionNumber].name} />

            <div className="alternatives">
              {questions[questionNumber].alternatives.map((alternative, i) => (
                <StyledAlternative
                  key={alternative.id}
                  prefix={prefix[i]}
                  content={alternative.content}
                  onClick={() => {
                    !answers[questionNumber]?.isAnswered &&
                      setAnswers((prev) => {
                        const newAnswers = [...prev];
                        newAnswers[questionNumber] = {
                          alternativeId: alternative.id,
                          isAnswered: true,
                        };
                        return newAnswers;
                      });
                  }}
                  color={color}
                  status={
                    answers[questionNumber]?.isAnswered
                      ? alternative.id === questions[questionNumber].answerId
                        ? "correct"
                        : answers[questionNumber].alternativeId ===
                          alternative.id
                        ? "incorrect"
                        : "default"
                      : "default"
                  }
                />
              ))}
            </div>

            <div className="options">
              {/* {questionNumber > 0 && (
                <OptionButton
                  color={color}
                  onClick={prevQuestion}
                  className="animate__animated animate__fadeInLeft"
                >
                  Anterior
                </OptionButton>
              )} */}
              <OptionButton
                color={color}
                onClick={prevQuestion}
                className={`animate__animated  ${
                  questionNumber > 0
                    ? "animate__fadeInLeft"
                    : "animate__fadeOutLeft"
                }`}
              >
                Anterior
              </OptionButton>
              {answers[questionNumber]?.isAnswered && (
                <OptionButton color={color} className="animate__bounceIn">
                  Saiba Mais
                </OptionButton>
              )}
              <OptionButton
                onClick={nextQuestion}
                color={color}
                ref={button}
                className={`animate__animated ${
                  questionNumber < topic.questions.length - 1
                    ? "animate__fadeInRight"
                    : "animate__fadeOutRight"
                }`}
              >
                Proxímo
              </OptionButton>

              {answers.every((answer) => answer.isAnswered) &&
                questionNumber == topic.questions.length - 1 && (
                  <OptionButton onClick={handleFinish} color={color}>
                    Finalizar
                  </OptionButton>
                )}
            </div>
          </>
        )}
      </Wrapper>
    </div>
  );
};

const StyledQuiz = styled(Quiz)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 70px;
  background-image: url(${bg.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #121214;

  ${StyledFolderCard} {
    margin-bottom: 30px;

    font-weight: 700;
    font-size: 36px;
  }

  ${ProgressBar} {
    margin-top: 40px;
    margin-bottom: 32px;
  }

  & > .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .folder-icon-quiz {
    margin-bottom: 40px;
  }

  ${StyledQuestion} {
    margin-bottom: 36px;
  }

  .none {
    display: none;
  }

  .alternatives {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  .options {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 18px;
    margin-top: 24px;
    justify-content: flex-end;
    width: 100%;
  }
`;

const OptionButton = styled.button<{ color?: string }>`
  cursor: pointer;
  width: 100%;
  height: 48px;
  width: 200px;
  border: none;
  background-color: ${(props) => props.color}20;
  color: #fff;

  border: 2px solid ${(props) => props.color};
  border-radius: 50px;

  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  text-align: center;

  &:hover {
    background-color: ${(props) => props.color}40;
  }
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id, topicId, level } = context.query as {
    id: string;
    topicId: string;
    level: string;
  };

  const road = await getQuiz(id, topicId, level);

  return {
    props: { road },
  };
};

export default StyledQuiz;
