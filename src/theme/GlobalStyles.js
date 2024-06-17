import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-style: normal;
    background-color: ${({ theme }) => theme.white};
  }
`;
