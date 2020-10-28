import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

/* Base */
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit; 
}
html {
font-size: 62.5%;
}
body {
    // font-family; // // "Poppins-Regular", sans-serif;
    font-weight: 400;
    line-height: 1.7;
}
html,
body {
    box-sizing: border-box;
    height: 100%;
    overflow-x: hidden;
}
`
/* Container */
export const Container = styled.main`
  width: 100%;
  margin: 0 auto;
`;
