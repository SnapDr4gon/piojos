import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background: #0d1117;
    color: #c9d1d9;
  }
  
  a {
    color: #58a6ff;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
`;

export default GlobalStyle;

