// import "../styles/globals.css";
import type { AppProps } from "next/app";
import theme from "../styles/theme";
import styled, { ThemeProvider } from "styled-components";
import { NavBar } from "components/NavBar";
import Footer from "components/Footer";
import { GlobalStyle } from "styles/globalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </Container>
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
