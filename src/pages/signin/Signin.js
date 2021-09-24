import React from 'react';
import Headerone from '../../components/header/signinheader';
import { Form, Button } from 'react-bootstrap';
import "./signin.css"


const Signin = () => {

 


  const handleClick = () => {
    window.location.href='/newsview'
  };

  return (
      <div className="signin">
          <Headerone/>
          <div className="signin-container">
              <div className="signin-card">
                  <div className="signin-card-head">
                      <h4>Login to Admin Panel</h4>
                      <p>Enter your details below</p>
                  </div>
                  <Form>
                        <div className='custom-input'>
                        <label>Username*</label>
                        <Form.Control type='text' placeholder='Enter your Username' />
                      
                        </div>
                        <div className='custom-input'>
                        <label>Password*</label>
                        <Form.Control type='password' placeholder='Enter your Password' />
                      
                        </div>
                    </Form>
                    <Button className="green-btn" onClick={() => handleClick()}>
                       Login
                    </Button>
              </div>
          </div>
    </div>
  );
};

export default Signin;
