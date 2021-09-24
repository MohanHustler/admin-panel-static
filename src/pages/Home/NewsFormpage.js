import React from 'react';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import "./home.css"
import { Form, Button } from 'react-bootstrap';


const NewsFormpage = () => {

    const handleClick = () => {
        window.location.href='/newsview'
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
                      <h4>News Form</h4>
                      <p>Enter your details below</p>
                  </div>
          <Form>
                    <div className='custom-input'>
                      <label>News Heading*</label>
                      <Form.Control type='text' placeholder='Enter News Heading' />
                    
                      </div>
                      <div className='custom-input'>
                      <label>News Description*</label>
                      <Form.Control as="textarea" rows="5"  placeholder='Enter News description' />
                    
                      </div>  
                      <div className='custom-input'>
                      <label>News Banner Image*</label>
                      <Form.File id="exampleFormControlFile1" />
                    
                      </div>
                      <div className='custom-input'>
                      <label>News Logo Image*</label>
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

export default NewsFormpage;
