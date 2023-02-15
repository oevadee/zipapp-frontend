"use client";

import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { UserContextProvider } from "./context/user";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.spaceCadet};
  color: ${({ theme }) => theme.color.white};
`;

const SMain = styled.main`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth.desktop};
  height: 100%;
`;

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <UserContextProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <SWrapper>
              <SMain>{children}</SMain>
            </SWrapper>
          </ThemeProvider>
        </UserContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
