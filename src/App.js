import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import NotFound from './Pages/NotFound';
import AgeGate from './Pages/AgeGate';
import Home from './Pages/Home';

import Theme from './Theme';

function App() {

  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          {
            !(localStorage.getItem("eligible")) ?
              <Route exact path="/" component={AgeGate}></Route>
              :
              <Route exact path="/" component={Home}></Route>
          }
          <Route component={NotFound}></Route>
          <Home />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
