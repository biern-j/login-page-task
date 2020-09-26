import React from "react";
import ReactDom from "react-dom";

import { GlobalStyles, Container, LoginPageContainer } from "./indexStyle";

import { LoginWidget } from "./components/loginWidget";
const App = () => {
  return (
    <Container>
      <LoginPageContainer>
        <LoginWidget />
      </LoginPageContainer>
      <GlobalStyles />
    </Container>
  );
};

ReactDom.render(<App />, document.getElementById("app"));
