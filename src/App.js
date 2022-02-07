import GlobalState from "./GlobalState/GlobalState";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./Components/header/header";
import Routes from "./Routes/Router";
import React from 'react'

function App() {
  return (
      <GlobalState>
        <Router>
          <Header />
          <Routes />
        </Router>
      </GlobalState>
  );
}

export default App;
