import React from "react";
import Navbar from "./components/Navbar";
import Players from "./components/Players";
import styles from "./App.module.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {PlayerDetails}  from "./pages/PlayerDetails";
import Search from "./components/Search";





function App() {
  return (
    
      <Router>
      <header>
        <Link to ="/">
        <Navbar brand="FIFA" />
        </Link>
        <Search/>
        {/* <Link to="/">
          <h1 className={styles.title}>Players</h1>
        </Link> */}
      </header>
      <main>
      
        <Switch>
          <Route exact path="/players/:playerId"><PlayerDetails/></Route>
          <Route path="/"><Players/></Route>
        </Switch>
        
      </main>
    </Router>
    
    
      
  
  );
}

export default App;
