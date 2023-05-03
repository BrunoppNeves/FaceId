import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Paths } from "./routes";
import { EstilizacaoGlobal } from "./styles/global";


function App() {
  return (
    <>
      <EstilizacaoGlobal />
      <BrowserRouter>
        <Paths />
      </BrowserRouter>
    </>
  );
}

export default App;
