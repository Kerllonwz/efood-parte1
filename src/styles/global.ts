import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #FFF8F2;
    color: #E66767;
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
`
