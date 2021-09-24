import React, {useState} from 'react';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import "./home.css"
import { Button, Modal, Col, Row } from 'react-bootstrap';
import news from '../../assets/images/news/2.png';
import newslogo from '../../assets/images/news/2.2.png';
import Continue from '../Continue/Continue';
import close from '../../assets/images/close.svg';
import plus from "../../assets/images/plus.png";


const NewsViewpage = () => {


  const handleClick = () => {
    window.location.href='/newsform'
  };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
      <div className="dashboard">
          <Header/>
          <div className="dashboard-wrapper">

              <Sidebar/>
              <div className="dashboard-container">
                  <div className="dashboard-inner-container">
                  <div className='news-view'>
      <div className='signin-card-head'>
        <h4>News View
        <span className="green-btn" onClick={() => handleClick()}>
            <img src={plus} alt="logo" /> Add News
          </span>

        </h4>
      </div>
      <div className='news-card'>
        <Row>
          <Col>
            <div className='news-card-img'>
              <img src={news} alt='logo' />
            </div>
          </Col>

          <Col>
            <div className='news-card-text'>
              <h4>
                Uber and Sun Mobility come together to deploy e-three wheeler in
                India
              </h4>
              <p>
                The availability of swappable lithium-ion batteries will reduce
                the overall cost of ownership of such eco- friendly vehicles as
                batteries constitute almost 40% of the overall cost of an
                electric vehicle.
              </p>
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
            </div>
          </Col>
        </Row>
      </div>
      <div className='news-card'>
        <Row>
          <Col>
            <div className='news-card-img'>
              <img src={news} alt='logo' />
            </div>
          </Col>

          <Col>
            <div className='news-card-text'>
              <h4>
                Uber and Sun Mobility come together to deploy e-three wheeler in
                India
              </h4>
              <p>
                The availability of swappable lithium-ion batteries will reduce
                the overall cost of ownership of such eco- friendly vehicles as
                batteries constitute almost 40% of the overall cost of an
                electric vehicle.
              </p>
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
            </div>
          </Col>
        </Row>
      </div>
      <div className='news-card'>
        <Row>
          <Col>
            <div className='news-card-img'>
              <img src={news} alt='logo' />
            </div>
          </Col>

          <Col>
            <div className='news-card-text'>
              <h4>
                Uber and Sun Mobility come together to deploy e-three wheeler in
                India
              </h4>
              <p>
                The availability of swappable lithium-ion batteries will reduce
                the overall cost of ownership of such eco- friendly vehicles as
                batteries constitute almost 40% of the overall cost of an
                electric vehicle.
              </p>
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
            </div>
          </Col>
        </Row>
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

                  </div>
              </div>
          </div>
    </div>
  );
};

export default NewsViewpage;
