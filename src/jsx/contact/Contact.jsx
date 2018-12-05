import React, {Component} from 'react';

import Header from '../Header.jsx';
import NavBar from '../NavBar.jsx';
import Footer from '../Footer.jsx';

class Contact extends Component {
  render() {
    return(
      <div>
        <NavBar/>
        <Header/>
        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2>Contact us</h2>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero odio fugiat voluptatem dolor, provident officiis, id iusto! Obcaecati incidunt, qui nihil beatae magnam et repudiandae ipsa exercitationem, in, quo totam.</p>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    )
  }
}

export default Contact;