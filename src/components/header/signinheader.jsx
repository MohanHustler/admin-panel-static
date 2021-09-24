import React from 'react';
import { Navbar} from 'react-bootstrap'

import logo from "../../assets/images/logo.png"
import "./header.css"

const Headerone = () => {
  return (
      <div>
    <div className="header">
            <Navbar expand="lg">
          <div className="header-section">
              <div className="header-logo">
              <Navbar.Brand>
        <img src={logo} alt="logo" />
                </Navbar.Brand>
              </div>

  </div>
</Navbar>

    </div>
    </div>
  );
};

export default Headerone;
