import React from 'react';
import Nav from './nav'
import Home from './home'
import Localfood from './localfood'
import Foreignfood from './foreignfood'
import Snacks from './snacks'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App(){
    return(
        <div>
            <Router>
            <Nav/>
        <Switch>
                <Route exact path='/home'><Home/></Route>
                <Route  path='/localfood'><Localfood/></Route>
                <Route  path='/foreignfood'><Foreignfood/></Route>
                <Route  path='/snacks'><Snacks/></Route>
              </Switch>
            </Router>
        </div>
    )
}

export default App