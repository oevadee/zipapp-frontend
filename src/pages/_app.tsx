import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { UserProvider } from "../context/user";
import { GlobalStyle } from "../styles/GlobalStyle";
import { theme } from "../styles/theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
