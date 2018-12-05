import React, {Component} from 'react'

import Header from '../Header.jsx';
import NavBar from '../NavBar.jsx';
import Footer from '../Footer.jsx';

// import CreateSchedule from './CreateSchedule.jsx';
// import DataAnalysis from './DataAnalysis.jsx';
// import FormatSchedule from './FormatSchedule.jsx';

class Create extends Component {
  render() {
    return(
      <div>
        <NavBar/>
        <Header/>
        <Footer/>
      </div>
    )
  }
}

export default Create;