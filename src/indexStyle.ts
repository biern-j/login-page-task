import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
/* Base */
*,
*::after,
*::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit; 
}
html {
font-size: 62.5%;
}
body {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    line-height: 1.7;
}
html,
body {
    box-sizing: border-box;
    height: 100%;
    overflow-x: hidden;
}
`;
