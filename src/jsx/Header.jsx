import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <header className="bg-primary text-white">
        <div className="container text-center">
          <h1>Schedule Builder</h1>
          <p className="lead">Make scheduling your team easy</p>
        </div>
      </header>
    )
  }
}

export default Header;