import React from "react";
import Home from "./pages/Home";
import Example1 from './pages/Example1';
import Example2 from './pages/Example2';
import Example3 from "./pages/Example3";
import Example4 from './pages/Example4';
import Example5 from './pages/Example5';
import Example6 from "./pages/Example6";
import Example7 from './pages/Example7';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';

function Navigation(){

    return(
        <Router>
            <nav className="nav-adjust navbar-inverse">
                <ul className="nav navbar-nav">
                  <li><Link to="/">HOME</Link></li>
                  <li><Link to="/ex1">ToDo-List</Link></li>
                 <li><Link to="/ex2">BusinessCard</Link></li>
                 <li><Link to="/ex3">GallaryDemo</Link></li>
                 <li><Link to="/ex4">QuizDemo</Link></li>
                 <li><Link to="/ex5">QuizDemo2</Link></li>
                 <li><Link to="/ex6">SimpleForm</Link></li>
                 <li><Link to="/ex7">ToDo-List-2</Link></li>
              </ul>
            </nav>
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/ex1" component={Example1}/>  
                <Route path="/ex2" component={Example2}/>  
                <Route path="/ex3" component={Example3}/>
                <Route path="/ex4" component={Example4}/>
                <Route path="/ex5" component={Example5}/>
                <Route path="/ex6" component={Example6}/>
                <Route path="/ex7" component={Example7}/>
              </Switch>
          </Router>
    );

}

export default Navigation;