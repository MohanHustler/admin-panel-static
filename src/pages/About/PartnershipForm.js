import React, { useState } from 'react';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import '../Home/home.css';
import { Form, Button } from 'react-bootstrap';
import plus from '../../assets/images/plus.png';

import AddNews from './AddNews';

const PartnershipForm = () => {
  const [addNews, setAddNews] = useState([1]);

  const handleClick = () => {
    window.location.href = '/partnershipview';
  };

  const handleAddNews = () => {
    setAddNews([...addNews, addNews.length + 1]);
  };

  const handleRemoveNews = () => {
    if (addNews.length > 1) {
      setAddNews(addNews.filter((el) => el !== addNews[addNews.length - 1]));
    }
  };

  return (
    <div className='dashboard'>
      <Header />
      <div className='dashboard-wrapper'>
        <Sidebar />
        <div className='dashboard-container'>
          <div className='dashboard-inner-container'>
            <div className='news-form'>
              <div className='signin-card-head'>
                <h4>Partnership Form</h4>
                <p>Enter your details below</p>
              </div>
              <Form>
                <div className='custom-input'>
                  <label>Client Logo*</label>
                  <Form.File id='exampleFormControlFile1' />
                </div>
                <div className='custom-input'>
                  <label>Client Description*</label>
                  <Form.Control
                    as='textarea'
                    rows='5'
                    placeholder='Enter Description'
                  />
                </div>
                <div className='signin-card-head'>
                  <h4>
                    Add News Content
                    <span onClick={handleAddNews} className='green-btn'>
                      <img src={plus} alt='logo' /> Add News Card
                    </span>
                  </h4>
                </div>

                {addNews.map((el, index) => (
                  <AddNews
                    key={index}
                    handleAddNews={handleAddNews}
                    handleRemoveNews={handleRemoveNews}
                  />
                ))}
              </Form>
              <div className='form-button-section'>
                <Button className='white-btn' onClick={() => handleClick()}>
                  Cancel
                </Button>
                <Button className='green-btn' onClick={() => handleClick()}>
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

export default PartnershipForm;
