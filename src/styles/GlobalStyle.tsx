import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  root {
    font-size: 16px;
  }
  body {
    color: #fff;
    background: #000;
  }
`;
