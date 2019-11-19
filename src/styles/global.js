import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: linear-gradient(to bottom, #5c9ead, #bcd4de);
    -webkit-font-smoothing: antialiased !important;
    color: #2b303a;
    font-family: 'Lato', sans-serif;
  }
`;
