import CardTopic from "components/CardTopic";
import StyledNavigation from "components/Navigation";
import Wrapper from "components/Wrapper";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import styled from "styled-components";
import bg from "assets/background.jpg";
import StyledModal from "components/Modal";
import StyledModalSelectLevel from "components/ModalLevel";
import { Road } from "data/road";
import { GetServerSideProps } from "next";
import { getRoadById } from "services/roadService";

interface Props {
  className?: string;
  road: Road;
}

const Contents: FC<Props> = ({ className, road }) => {
  const { push } = useRouter();
  const [openSelectLevelModal, setOpenSelectLevelModal] = useState(false);
  const { color, id, name, topics, description } = road;

  return (
    <>
      <div className={className}>
        <StyledNavigation
          color={color}
          onClick={() => {
            push("/");
          }}
          title={"Frontend"}
        />

        <Wrapper>
          <ContentText color={color}>Conteúdos</ContentText>

          <div className="topics">
            {topics.map((topic, index) => (
              <CardTopic
                key={index}
                title={topic.name}
                color={color}
                onClick={() => {
                  setOpenSelectLevelModal(true);
                }}
              >
                {topic.name}
              </CardTopic>
            ))}
          </div>
        </Wrapper>
      </div>

      <StyledModalSelectLevel
        open={openSelectLevelModal}
        onCancel={() => setOpenSelectLevelModal(false)}
      />
    </>
  );
};

const ContentText = styled.h1`
  border-bottom: 4px solid ${(props) => props.color};

  font-weight: 700;
  font-size: 36px;
`;

const StyledContents = styled(Contents)`
  background-image: url(${bg.src});
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 70px;
  & > .wrapper {
    align-self: center;
    display: flex;
    flex-direction: column;
    width: 100%;

    ${ContentText} {
      width: fit-content;
      margin-top: 40px;
      margin-bottom: 30px;
      padding-bottom: 1px;
    }

    .topics {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      ${CardTopic} {
        border-radius: 8px;
        max-width: 400px;
        width: 100%;

        &:not(:last-child) {
          margin-bottom: 24px;
        }
      }
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };
  console.log(context);
  const road = await getRoadById(id);

  return {
    props: { road },
  };
};

export default StyledContents;
