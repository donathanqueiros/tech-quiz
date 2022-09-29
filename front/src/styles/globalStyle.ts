import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
  font-family: "DM Sans", sans-serif;
  width:100vw ;
  scroll-behavior: smooth;
  overflow-x: hidden;

  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  /* color: white; */
}
}

a {
  color: inherit;
  text-decoration: none;
}



`;
