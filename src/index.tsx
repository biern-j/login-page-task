import React from "react";
import ReactDom from "react-dom";

import { GlobalStyles, Container } from "./indexStyle";


const App = () => {
  return (
    <Container>
      <GlobalStyles />
    </Container>
  );
};

ReactDom.render(<App />, document.getElementById("app"));
