import React, {Component} from 'react';

class NavBar extends Component {
  render() {
    const sections = ['Home', 'Availability', 'Create', 'Contact']
    const link = sections.map((each) => {
      return (
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href={each}>{each}</a>
        </li>
      )
    })
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">Schedule Builder</a>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              {link}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar;