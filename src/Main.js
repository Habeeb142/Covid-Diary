import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";

//Components
import Eligible from "./ComponentsOld/Modals/Eligible";
import Home from "./ComponentsOld/General/Home";

function App() {
  return (
    <>
      <Eligible />
      <Home />
    </>
  );
}

export default App;
