import React from 'react';
import { Navbar} from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'

import logo from "../../assets/images/logo.png"
import "./header.css"
import arrow from "../../assets/images/arrow-right.png";

const Header = () => {
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
              <div className="header-profile">      
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Dropdown>
                <Dropdown.Toggle>
                        <div>
                            Admin
                            <span className="arrow">
                <img src={arrow} alt="text"></img>
              </span>
                        </div>
                
  
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/">Logout</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
              </Navbar.Collapse>
                </div>

  </div>
</Navbar>

    </div>
    </div>
  );
};

export default Header;
