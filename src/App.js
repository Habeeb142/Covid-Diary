import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";

//Components
import Eligible from "./Components/Modals/Eligible";
import Home from "./Components/General/Home";

function App() {
  return (
    <div>
      <Eligible />
      <Home />
    </div>
  );
}

export default App;
