import React, { useState } from 'react';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import '../Home/home.css';
import { Button, Modal, Col, Row } from 'react-bootstrap';
import news from '../../assets/images/news/o1.png';
import newslogo from '../../assets/images/news/indian-oil.png';
import Continue from '../Continue/Continue';
import close from '../../assets/images/close.svg';
import plus from "../../assets/images/plus.png";


const PartnershipView = () => {

    const handleClick = () => {
        window.location.href='/partnershipform'
      };


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='dashboard'>
      <Header />
      <div className='dashboard-wrapper'>
        <Sidebar />
        <div className='dashboard-container'>
          <div className='dashboard-inner-container'>
            <div className='news-view'>
              <div className='signin-card-head'>
                <h4>Partnership View
                <span className="green-btn" onClick={() => handleClick()}>
            <img src={plus} alt="logo" /> Add Partnership
          </span>
                </h4>
              </div>
              <div className='news-card partnership-card'>
                
                    
                    <div className='news-card-text'>
                    <div className='bottom-section'>
                        <span>
                          <img src={newslogo} alt='logo' />
                        </span>
                        <div className='button-section'>
                          <ul className='list-unstyled'>
                            <li onClick={() => handleClick()}>Edit</li>
                            <li></li>
                            <li onClick={handleShow}>Delete</li>
                          </ul>
                        </div>
                      </div>
                      <h4>
                        June, 2020 SUN Mobility has partnered with IOCL, India's
                        largest oil marketing company. IOCL and SUN Mobility
                        have been working together to leverage the latter’s
                        world class, interoperable battery swapping technology
                        aimed at electric 2 & 3 wheelers. This partnership will
                        ensure that this solution is accessible to customers at
                        the same scale and ease as conventional vehicles.
                      </h4>
                      
                    </div>
                    <div className="news-card-section">
                    <div className='news-card-img'>
                      <img src={news} alt='logo' />
                      <div className='overlay'></div>
                      <div className='milestone-text'>
                        <p>
                          SUN Mobility and IOCL launch battery swapping facility
                          for Electric Vehicles in Chandigarh
                        </p>
                        <label>www.auto.hindustantimes.com</label>
                      </div>
                    </div>
                    <div className='news-card-img'>
                      <img src={news} alt='logo' />
                      <div className='overlay'></div>
                      <div className='milestone-text'>
                        <p>
                          SUN Mobility and IOCL launch battery swapping facility
                          for Electric Vehicles in Chandigarh
                        </p>
                        <label>www.auto.hindustantimes.com</label>
                      </div>
                    </div>
                    <div className='news-card-img'>
                      <img src={news} alt='logo' />
                      <div className='overlay'></div>
                      <div className='milestone-text'>
                        <p>
                          SUN Mobility and IOCL launch battery swapping facility
                          for Electric Vehicles in Chandigarh
                        </p>
                        <label>www.auto.hindustantimes.com</label>
                      </div>
                    </div>
                    </div>
                    
                
              </div>
              <div className='news-card partnership-card'>
                
                    
                <div className='news-card-text'>
                <div className='bottom-section'>
                    <span>
                      <img src={newslogo} alt='logo' />
                    </span>
                    <div className='button-section'>
                      <ul className='list-unstyled'>
                        <li onClick={() => handleClick()}>Edit</li>
                        <li></li>
                        <li onClick={handleShow}>Delete</li>
                      </ul>
                    </div>
                  </div>
                  <h4>
                    June, 2020 SUN Mobility has partnered with IOCL, India's
                    largest oil marketing company. IOCL and SUN Mobility
                    have been working together to leverage the latter’s
                    world class, interoperable battery swapping technology
                    aimed at electric 2 & 3 wheelers. This partnership will
                    ensure that this solution is accessible to customers at
                    the same scale and ease as conventional vehicles.
                  </h4>
                  
                </div>
                <div className="news-card-section">
                <div className='news-card-img'>
                  <img src={news} alt='logo' />
                  <div className='overlay'></div>
                  <div className='milestone-text'>
                    <p>
                      SUN Mobility and IOCL launch battery swapping facility
                      for Electric Vehicles in Chandigarh
                    </p>
                    <label>www.auto.hindustantimes.com</label>
                  </div>
                </div>
                <div className='news-card-img'>
                  <img src={news} alt='logo' />
                  <div className='overlay'></div>
                  <div className='milestone-text'>
                    <p>
                      SUN Mobility and IOCL launch battery swapping facility
                      for Electric Vehicles in Chandigarh
                    </p>
                    <label>www.auto.hindustantimes.com</label>
                  </div>
                </div>
                <div className='news-card-img'>
                  <img src={news} alt='logo' />
                  <div className='overlay'></div>
                  <div className='milestone-text'>
                    <p>
                      SUN Mobility and IOCL launch battery swapping facility
                      for Electric Vehicles in Chandigarh
                    </p>
                    <label>www.auto.hindustantimes.com</label>
                  </div>
                </div>
                </div>
                
            
          </div>
          <div className='news-card partnership-card'>
                
                    
                    <div className='news-card-text'>
                    <div className='bottom-section'>
                        <span>
                          <img src={newslogo} alt='logo' />
                        </span>
                        <div className='button-section'>
                          <ul className='list-unstyled'>
                            <li onClick={() => handleClick()}>Edit</li>
                            <li></li>
                            <li onClick={handleShow}>Delete</li>
                          </ul>
                        </div>
                      </div>
                      <h4>
                        June, 2020 SUN Mobility has partnered with IOCL, India's
                        largest oil marketing company. IOCL and SUN Mobility
                        have been working together to leverage the latter’s
                        world class, interoperable battery swapping technology
                        aimed at electric 2 & 3 wheelers. This partnership will
                        ensure that this solution is accessible to customers at
                        the same scale and ease as conventional vehicles.
                      </h4>
                      
                    </div>
                    <div className="news-card-section">
                    <div className='news-card-img'>
                      <img src={news} alt='logo' />
                      <div className='overlay'></div>
                      <div className='milestone-text'>
                        <p>
                          SUN Mobility and IOCL launch battery swapping facility
                          for Electric Vehicles in Chandigarh
                        </p>
                        <label>www.auto.hindustantimes.com</label>
                      </div>
                    </div>
                    <div className='news-card-img'>
                      <img src={news} alt='logo' />
                      <div className='overlay'></div>
                      <div className='milestone-text'>
                        <p>
                          SUN Mobility and IOCL launch battery swapping facility
                          for Electric Vehicles in Chandigarh
                        </p>
                        <label>www.auto.hindustantimes.com</label>
                      </div>
                    </div>
                    <div className='news-card-img'>
                      <img src={news} alt='logo' />
                      <div className='overlay'></div>
                      <div className='milestone-text'>
                        <p>
                          SUN Mobility and IOCL launch battery swapping facility
                          for Electric Vehicles in Chandigarh
                        </p>
                        <label>www.auto.hindustantimes.com</label>
                      </div>
                    </div>
                    </div>
                    
                
              </div>
           
                 </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className='continue-popup'
      >
        <div className='continue-close' onClick={handleClose}>
          <img src={close} alt='text'></img>
        </div>
        <Modal.Body>
        <div className='continue'>
      <div className='continue-content'>
        <h2>Do you want Delete ?</h2>
       
        <div className='send-button'>
          <Button className='green-btn cancel' onClick={handleClose}>No</Button>
          <Button className='green-btn' onClick={handleClose}>Yes</Button>
        </div>
      </div>
    </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PartnershipView;
