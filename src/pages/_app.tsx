import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import * as React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import { theme } from "../styles/theme";

const App = ({ Component, pageProps }: AppProps) => {
  const { push } = useRouter();
  React.useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      push("/");
    } else {
      push("/signin");
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
