import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-text: hsl(0, 0%, 0%);
    --color-background: hsl(0, 0%, 100%);
    --color-primary: hsl(210, 95%, 50%);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 2em;

    color: var(--color-text);
    background-color: var(--color-background);

    font-family: system-ui, sans-serif;
  }

  a {
    color: var(--color-primary);
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }

  h1 {
    margin: 0;
  }
`;

export default GlobalStyles;
