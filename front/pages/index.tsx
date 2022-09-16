import type { NextPage } from "next";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import StyledFooter from "../components/Footer";
import { NavBar } from "../components/NavBar";
import OpenSource from "../components/OpenSource";
import RoadCard from "../components/RoadCard";
import Wrapper from "../components/Wrapper";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar />

      <Content style={{ background: "black" }}>
        <Wrapper>
          <h1>Lorem Ipsum Dolor Sit Amet</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            vestibulum a ligula a auctor. Sed semper felis a augue vehicula:
          </span>

          <Cards>
            <RoadCard title="Frontend" color="#770cf2" />
            <RoadCard title="Frontend" color="#770cf2" />
            <RoadCard title="Frontend" color="#770cf2" />
            <RoadCard title="Frontend" color="#770cf2" />
            <RoadCard title="Frontend" color="#770cf2" />
          </Cards>

          <Button>Mais Opções</Button>

          <OpenSource />
        </Wrapper>
      </Content>

      <StyledFooter />
    </Container>
  );
};

const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 96px;
`;

const Content = styled.main`
  padding-top: 70px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  .wrapper {
    margin: 0 auto;
    padding: 0px 126px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ${Cards} {
    margin-top: 30px;
    margin-bottom: 60px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: black;
`;

const Button = styled.button`
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

export default Home;
