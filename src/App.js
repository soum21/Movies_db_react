import React from 'react';
import NavBar from './Components/Layout/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Details from './Components/Details';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path = "/:movie_id" component ={Details} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
