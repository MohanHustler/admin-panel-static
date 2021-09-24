import React from 'react';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import "./home.css"
import { Form, Button } from 'react-bootstrap';


const NetworkForm = () => {


  const handleClick = () => {
    window.location.href='/networkview'
  };

  return (
      <div className="dashboard">
          <Header/>
          <div className="dashboard-wrapper">

              <Sidebar/>
              <div className="dashboard-container">
                  <div className="dashboard-inner-container">
                  <div className="news-form">
        <div className="signin-card-head">
                      <h4>Network Form</h4>
                      <p>Enter your details below</p>
                  </div>
          <Form>
                    
                      <div className='custom-input'>
                      <label>Network Description*</label>
                      <Form.Control as="textarea" rows="5"  placeholder='Enter Network description' />
                    
                      </div>  
                    </Form>
                    <div className="form-button-section">
                    <Button className="white-btn" onClick={() => handleClick()}>
                       Cancel
                    </Button>
                    <Button className="green-btn" onClick={() => handleClick()}>
                       Submit
                    </Button>
                    </div>
                 
    </div>

                  </div>
              </div>
          </div>
    </div>
  );
};

export default NetworkForm;
