import React from 'react';
import './app.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home';
import Login from './login';
import Signin from './signin';
import Job from './Job';
import Availablejobs from './availablejobs';
const App = () =>{
  return (
    <BrowserRouter>
     <Switch>
     <Route path="/" exact component={Login} />
     <Route path="/Home" exact component={Home} />
     <Route path="/signin" exact component={Signin}/>
     <Route path="/Job" exact component={Job}/>
     <Route path="/Availablejobs" exact component={Availablejobs}/>
     </Switch>
    </BrowserRouter>
  )
}

export default App;
