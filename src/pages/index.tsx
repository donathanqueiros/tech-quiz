import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import OpenSource from "../components/OpenSource";
import RoadCard from "../components/RoadCard";
import Wrapper from "../components/Wrapper";
import bg from "assets/background.jpg";
import { useRouter } from "next/router";
import { getRoads } from "services/roadService";
import { Road } from "data/road";

interface Props {
  roads: Road[];
}

const Home: NextPage<Props> = ({ roads }) => {
  const [maxRoad, setMaxRoad] = useState(6);
  const { push } = useRouter();

  return (
    <Container>
      <Head>
        <title>TechQUIZ | Inicio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
        <Wrapper>
          <h1 className="title-home">
            Bem vindo ao <span>TechQUIZ</span>
          </h1>
          <span className="description">
            Escolha um das categorias abaixo e teste seus conhecimentos sobre
            tecnologia.
          </span>

          <Cards>
            {roads.map((road, index) => (
              <RoadCard
                key={index}
                title={road.name}
                color={road.color}
                onClick={() => push(`/quiz/${road.id}`)}
              />
            ))}
          </Cards>

          {maxRoad == 6 && (
            <Button onClick={() => setMaxRoad(12)}>Mais Opções</Button>
          )}
        </Wrapper>
        <OpenSource />
      </Content>
    </Container>
  );
};

const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 96px;
`;

const Button = styled.button`
  cursor: pointer;
  width: 200px;
  height: 50px;
  color: white;
  position: relative;
  margin: auto;
  border: double 2px transparent;
  border-radius: 50px;
  background-image: linear-gradient(rgba(119, 12, 242, 0.22), #770cf2),
    radial-gradient(circle, rgba(119, 12, 242, 0.22), #770cf2 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

const Content = styled.main`
  background-image: url(${bg.src});
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 70px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  .wrapper {
    margin: 0 auto;
    padding: 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title-home {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 24px;
    color: #54a1ff;
    span {
      color: #770cf2;
      padding-bottom: 1px;
      border-bottom: 4px solid ${(props) => props.theme.colors.primary};
    }
  }

  .description {
    font-size: 18px;
    margin-bottom: 48px;
  }

  ${Cards} {
    margin-top: 30px;
    margin-bottom: 40px;
  }

  ${OpenSource} {
    margin-top: 70px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: black;

  span,
  h1,
  h2,
  h3,
  button {
    color: white;
  }
`;

export const getServerSideProps: GetServerSideProps = async () => {
  const roads = await getRoads();

  return {
    props: { roads },
  };
};

export default Home;