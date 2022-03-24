import React from "react";
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      'title' : '만드는 중!',
    }
  }

  render() {
    return (
      <>
        <div className="app-header">
          Header Test
        </div>
        <div>{this.state.title}</div>
      </>
      
    )
  }
}

export default Header;