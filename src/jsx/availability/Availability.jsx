import React, {Component} from 'react'

import Header from '../Header.jsx';
import NavBar from '../NavBar.jsx';
import Footer from '../Footer.jsx';
import AvailabilityForm from './AvailabilityForm.jsx';

class Availability extends Component {
  render() {
    return(
      <div>
        <NavBar/>
        <Header/>
        <AvailabilityForm/>
        <Footer/>
      </div>
    )
  }
}

export default Availability;