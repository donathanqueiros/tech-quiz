// import "../styles/globals.css";
import type { AppProps } from "next/app";
import theme from "../styles/theme";
import styled, { ThemeProvider } from "styled-components";
import { NavBar } from "components/NavBar";
import Footer from "components/Footer";
import { GlobalStyle } from "styles/globalStyle";
import { RoadProvider } from "contexts/RoadContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RoadProvider>
          <Container>
            <NavBar />
            <Component {...pageProps} />
            <Footer />
          </Container>
        </RoadProvider>
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: black;

  & > div {
    flex: 1;
  }
`;

export default MyApp;
