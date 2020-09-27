import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

/* Font */
@font-face {
  font-family: Poppins-Regular;
  src: url('./assets/fonts/poppins/Poppins-Regular.ttf'); 
}

@font-face {
  font-family: Poppins-Bold;
  src: url('./assets/fonts/poppins/Poppins-Bold.ttf'); 
}

@font-face {
  font-family: Poppins-Medium;
  src: url('./assets/fonts/poppins/Poppins-Medium.ttf'); 
}

@font-face {
  font-family: Montserrat-Bold;
  src: url('./assets/fonts/montserrat/Montserrat-Bold.ttf'); 
}

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
    font-family: "Poppins-Regular", sans-serif;
    font-weight: 400;
    line-height: 1.7;
}
html,
body {
    box-sizing: border-box;
    height: 100%;
    overflow-x: hidden;
}

/*Typography normalization */
a {
	font-family: Poppins-Regular;
	font-size: 1.4rem;
	line-height: 1.7;
	color: #666666;
	margin: 0;
	transition: all 0.4s;
	-webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
}

a:focus {
	outline: none !important;
}

a:hover {
	text-decoration: none;
  color: #57b846;
}

h1,h2,h3,h4,h5,h6 {
	margin: 0;
}

p {
	font-family: Poppins-Regular;
	font-size: 1.4rem;
	line-height: 1.7;
	color: #666666;
	margin: 0;
}

input {
	outline: none;
	border: none;
}

input:focus {
  border-color: transparent !important;
}

input:focus::-webkit-input-placeholder { color:transparent; }
input:focus:-moz-placeholder { color:transparent; }
input:focus::-moz-placeholder { color:transparent; }
input:focus:-ms-input-placeholder { color:transparent; }

input::-webkit-input-placeholder { color: #999999; }
input:-moz-placeholder { color: #999999; }
input::-moz-placeholder { color: #999999; }
input:-ms-input-placeholder { color: #999999; }

button {
	outline: none !important;
	border: none;
	background: transparent;
}

button:hover {
	cursor: pointer;
}
`;

/* Utility */
export const TextCenter = styled.div`
  text-align: center;
`;

export const TextCenterTop = styled.div`
  text-align: center;
  padding-top: 13.6rem;
`;

export const TextWrapper = styled.span`
  font-family: Poppins-Regular;
  font-size: 13px;
  line-height: 1.5;
  color: #999999;
`;

export const TextLink = styled.a`
  font-family: Poppins-Regular;
  font-size: 13px;
  line-height: 1.5;
  color: #666666;
`;

/* Container */
export const Container = styled.main`
  width: 100%;
  margin: 0 auto;
`;
