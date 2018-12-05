import React, {Component} from 'react'

import Header from '../Header.jsx';
import NavBar from '../NavBar.jsx';
import Footer from '../Footer.jsx';
import Services from './Services.jsx';

class Home extends Component {
  render() {
    return(
      <div>
        <NavBar/>
        <Header/>
        <Services/>
        <Footer/>
      </div>
    )
  }
}

export default Home;