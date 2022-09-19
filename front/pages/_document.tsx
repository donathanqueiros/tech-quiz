// import Documnet, { DocumentContext, DocumentInitialProps } from "next/document";
// import { ServerStyleSheet } from "styled-components";

// export default class MyDocument extends Document {
//   static async getInitialProps(
//     ctx: DocumentContext
//   ): Promise<DocumentInitialProps> {
//     const sheet = new ServerStyleSheet();
//     const originalRenderPage = ctx.renderPage;

//     try {
//       ctx.renderPage = () =>
//         originalRenderPage({
//           enhanceApp: (App) => (props) =>
//             sheet.collectStyles(<App {...props} />),
//         });

//       const initialProps = await Document.getInitialProps(ctx);
//       return {
//         ...initialProps,
//         styles: (
//           <>
//             {initialProps.styles}
//             {sheet.getStyleElement()}
//           </>
//         ),
//       };
//     } finally {
//       sheet.seal();
//     }
//   }
// }

import { Html, Head, Main, NextScript } from "next/document";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: "DM Sans", sans-serif;

}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body>
        <GlobalStyle />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
