import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #E66767;
    --cream: #FFF8F2;
    --beige: #FFEBD9;
    --white: #FFFFFF;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--cream);
    color: var(--red);
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button,
  a {
    font-family: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  .container {
    margin: 0 auto;
    max-width: 1024px;
    width: 100%;
  }
`
