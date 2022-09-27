import StyledAlternative from "components/Alternative";
import StyledNavigation from "components/Navigation";
import ProgressBar from "components/ProgressBar";
import StyledQuestion from "components/Question";
import Wrapper from "components/Wrapper";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import bg from "assets/bg.png";
import { GetServerSideProps } from "next";
import { Road } from "data/road";
import { getQuiz } from "services/quizService";
import { useRoad } from "contexts/RoadContext";
import CardResult from "components/CardResult";
import { useRouter } from "next/router";

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
            <span className="folder-icon-quiz">
              <svg
                width="79"
                height="62"
                viewBox="0 0 79 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_di_159_642)">
                  <path
                    d="M42.6132 3.84576C39.6125 -0.0260517 36.6838 -0.0080645 34.5334 0.000929251L7.86454 0.149326C5.71862 0.162817 3.98658 1.9121 4.00008 4.05711L4.02257 7.94241L4.04507 12.4663L4.24751 49.5745C4.26101 51.7195 6.01104 53.4508 8.15696 53.4373L71.1356 53.091C73.2815 53.0775 75.0135 51.3282 75 49.1832L74.7931 11.441C74.7796 9.29597 73.0296 7.56467 70.8836 7.57816L46.5182 7.71307C44.3768 7.72206 43.9269 5.54108 42.6132 3.84576Z"
                    fill="#54A1FF"
                  />
                </g>
                <path
                  d="M39.4789 42V22.056L35.3389 23.028V19.5L41.4229 16.8H44.2669V42H39.4789Z"
                  fill="#B2B2B2"
                />
                <path
                  d="M38.4789 43V23.056L34.3389 24.028V20.5L40.4229 17.8H43.2669V43H38.4789Z"
                  fill="white"
                />
                <defs>
                  <filter
                    id="filter0_di_159_642"
                    x="0"
                    y="0"
                    width="79"
                    height="61.4373"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_159_642"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_159_642"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect2_innerShadow_159_642"
                    />
                  </filter>
                </defs>
              </svg>
            </span>

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
              {questionNumber > 0 && (
                <OptionButton color={color} onClick={prevQuestion}>
                  Anterior
                </OptionButton>
              )}
              {answers[questionNumber]?.isAnswered && (
                <OptionButton color={color}>Saiba Mais</OptionButton>
              )}
              {questionNumber < topic.questions.length - 1 && (
                <OptionButton onClick={nextQuestion} color={color}>
                  Proxímo
                </OptionButton>
              )}

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
