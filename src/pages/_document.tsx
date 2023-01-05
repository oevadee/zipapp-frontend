import { Html, Head, Main, NextScript } from "next/document";
import { Helmet } from "react-helmet";

const Document = () => {
  return (
    <Html lang="en">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
