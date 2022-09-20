import CardTopic from "components/CardTopic";
import StyledNavigation from "components/Navigation";
import Wrapper from "components/Wrapper";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import styled from "styled-components";
import bg from "assets/background.jpg";
import StyledModal from "components/Modal";
import StyledModalSelectLevel from "components/ModalLevel";

interface Props {
  className?: string;
}

const Contents: FC<Props> = ({ className }) => {
  const { push } = useRouter();
  const [openSelectLevelModal, setOpenSelectLevelModal] = useState(false);

  const color = "green";

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
            <CardTopic
              onClick={() => setOpenSelectLevelModal(true)}
              color={color}
            >
              teste
            </CardTopic>
            <CardTopic color={color}>teste</CardTopic>
            <CardTopic color={color}>teste</CardTopic>
            <CardTopic color={color}>teste</CardTopic>
            <CardTopic color={color}>teste</CardTopic>
            <CardTopic color={color}>teste</CardTopic>
            <CardTopic color={color}>teste</CardTopic>
            <CardTopic color={color}>teste</CardTopic>
            <CardTopic color={color}>teste</CardTopic>
            <CardTopic color={color}>teste</CardTopic>
            <CardTopic color={color}>teste</CardTopic>
            <CardTopic color={color}>teste</CardTopic>
            <CardTopic color={color}>teste</CardTopic>
            <CardTopic color={color}>teste</CardTopic>
            <CardTopic color={color}>teste</CardTopic>
            <CardTopic color={color}>teste</CardTopic>
            <CardTopic color={color}>teste</CardTopic>
            <CardTopic color={color}>teste</CardTopic>
            <CardTopic color={color}>teste</CardTopic>
            <CardTopic color={color}>teste</CardTopic>
            <CardTopic color={color}>teste</CardTopic>
            <CardTopic color={color}>teste</CardTopic>
            <CardTopic color={color}>teste</CardTopic>
            <CardTopic color={color}>teste</CardTopic>
            <CardTopic color={color}>teste</CardTopic>
            <CardTopic color={color}>teste</CardTopic>
            <CardTopic color={color}>teste</CardTopic>
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

export default StyledContents;
