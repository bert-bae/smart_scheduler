import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link, Route, BrowserRouter} from "react-router-dom";

import Home from './jsx/home/Home.jsx'
import Contact from './jsx/contact/Contact.jsx'
import Availability from './jsx/availability/Availability.jsx'
import Create from './jsx/create/Create.jsx'

import './index.css';
import './data/testdata.js'

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Route path="/home" component={Home}/>
          <Route path={"/contact"} component={Contact}/>
          <Route path={"/availability"} component={Availability}/>
          <Route path={"/create"} component={Create}/>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));