// import "../styles/globals.css";
import type { AppProps } from "next/app";
import theme from "../styles/theme";
import styled, { ThemeProvider } from "styled-components";
import { NavBar } from "components/NavBar";
import Footer from "components/Footer";
import { GlobalStyle } from "styles/globalStyle";
import { RoadProvider } from "contexts/RoadContext";
import { useRouter } from "next/router";
import "antd/dist/antd.css";
import "animate.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RoadProvider>
          <Container>
            {!asPath.includes("/contribute") && <NavBar />}
            <Component {...pageProps} />
            {!asPath.includes("/contribute") && <Footer />}
          </Container>
        </RoadProvider>
      </ThemeProvider>
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
