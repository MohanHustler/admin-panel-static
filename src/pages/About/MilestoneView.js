import React, { useState } from 'react';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import '../Home/home.css';
import { Button, Modal, Col, Row } from 'react-bootstrap';
import news from '../../assets/images/news/2.png';
import newslogo from '../../assets/images/news/2.2.png';
import Continue from '../Continue/Continue';
import close from '../../assets/images/close.svg';
import plus from "../../assets/images/plus.png";

const NewsViewpage = () => {

    const handleClick = () => {
        window.location.href='/milestoneform'
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
                <h4>Milestone View
                <span className="green-btn" onClick={() => handleClick()}>
            <img src={plus} alt="logo" /> Add Milestone
          </span>
                </h4>
              </div>
              <div className='news-card milestone-card'>
                <Row>
                  <Col className='pad0'>
                    <div className='news-card-img'>
                      <img src={news} alt='logo' />
                      <div className='overlay'></div>
                      <div className='milestone-text'>
                        <p>
                          Chetan Maini with Diego Graffi, CEO & MD, PVPL, Nitin
                          Gadkari, Minister of Road Transport and Highways of
                          India & Vincenzo de Luca, Italian Ambassador to India
                          at the Piaggio-SUN Mobility launch of Apé E-City
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className='news-card-text'>
                      <h4>
                        Partnered with Piaggio, one of the largest commercial
                        vehicle manufacturers, & launched the Ape E-city
                        electric auto powered by our revolutionary battery
                        swapping solution
                      </h4>
                      <div className='bottom-section'>
                        <span>
                          <label>Jun 2020</label>
                        </span>
                        <div className='button-section'>
                          <ul className='list-unstyled'>
                            <li onClick={() => handleClick()}>Edit</li>
                            <li></li>
                            <li onClick={handleShow}>Delete</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className='news-card milestone-card'>
                <Row>
                  <Col className='pad0'>
                    <div className='news-card-img'>
                      <img src={news} alt='logo' />
                      <div className='overlay'></div>
                      <div className='milestone-text'>
                        <p>
                          Chetan Maini with Diego Graffi, CEO & MD, PVPL, Nitin
                          Gadkari, Minister of Road Transport and Highways of
                          India & Vincenzo de Luca, Italian Ambassador to India
                          at the Piaggio-SUN Mobility launch of Apé E-City
                        </p>
                      </div>
                    </div>
                  </Col>

    <Col>
      <div className='news-card-text'>
        <h4>
        Partnered with Piaggio, one of the largest commercial vehicle manufacturers, & launched the Ape E-city electric auto powered by our revolutionary battery swapping solution
        </h4>
        <div className='bottom-section'>
          <span>
            <label>Jun 2020</label>
          </span>
          <div className='button-section'>
            <ul className='list-unstyled'>
              <li onClick={() => handleClick()}>Edit</li>
              <li></li>
              <li >Delete</li>
            </ul>
          </div>
        </div>
      </div>
    </Col>
  </Row>
</div>
<div className='news-card milestone-card'>
  <Row>
    <Col>
      <div className='news-card-img'>
        <img src={news} alt='logo' />
        <div className="overlay"></div>
        <div className="milestone-text">
            <p>
            Chetan Maini with Diego Graffi, CEO & MD, PVPL, Nitin Gadkari, Minister of Road Transport and Highways of India & Vincenzo de Luca, Italian Ambassador to India at the Piaggio-SUN Mobility launch of Apé E-City
            </p>
        </div>
      </div>
    </Col>

                  <Col>
                    <div className='news-card-text'>
                      <h4>
                        Partnered with Piaggio, one of the largest commercial
                        vehicle manufacturers, & launched the Ape E-city
                        electric auto powered by our revolutionary battery
                        swapping solution
                      </h4>
                      <div className='bottom-section'>
                        <span>
                          <label>Jun 2020</label>
                        </span>
                        <div className='button-section'>
                          <ul className='list-unstyled'>
                            <li onClick={() => handleClick()}>Edit</li>
                            <li></li>
                            <li onClick={handleShow}>Delete</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
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

export default NewsViewpage;
