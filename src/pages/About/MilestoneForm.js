import React from 'react';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import "../Home/home.css"
import { Form, Button } from 'react-bootstrap';

const MilestoneForm = () => {

  const handleClick = () => {
    window.location.href='/milestoneview'
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
                      <h4>Milestone Form</h4>
                      <p>Enter your details below</p>
                  </div>
          <Form>
                    <div className='custom-input'>
                      <label>Milestone Year*</label>
                      <Form.Control type='text' placeholder='Enter Milestone Year' />
                    
                      </div>
                      <div className='custom-input'>
                      <label>Milestone Description 1*</label>
                      <Form.Control as="textarea" rows="5"  placeholder='Enter Description' />
                    
                      </div>  
                      <div className='custom-input'>
                      <label>Milestone Description 2<span>(Goes to inside banner)</span></label>
                      <Form.Control as="textarea" rows="5" placeholder='Enter Description' />
                    
                      </div>
                      <div className='custom-input'>
                      <label>Milestone Banner*</label>
                      <Form.File id="exampleFormControlFile1" />
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

export default MilestoneForm;
