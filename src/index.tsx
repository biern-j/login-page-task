import React from "react";
import ReactDom from "react-dom";

import { GlobalStyles, Container } from "./indexStyle";

import { LoginWidget } from "./components/loginWidget";

const App = () => {
  return (
    <Container>
      <LoginWidget />
      <GlobalStyles />
    </Container>
  );
};

ReactDom.render(<App />, document.getElementById("app"));
