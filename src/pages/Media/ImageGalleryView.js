import React, { useState } from 'react';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import '../Home/home.css';
import '../Media/media.css';
import { Button, Modal, Col, Row } from 'react-bootstrap';
import image from '../../assets/images/imagegallery/1.png';
import imageauto from '../../assets/images/imagegallery/2.png';
import Continue from '../Continue/Continue';
import close from '../../assets/images/close.svg';
import plus from '../../assets/images/plus.png';
import more from '../../assets/images/more.svg';
import { Form } from 'react-bootstrap';

const ImageGalleryView = () => {
  const handleClick = () => {
    window.location.href = '/imagegalleryform';
  };

  const [edit, toggleEdit] = React.useState(false);
  const [edit1, toggleEdit1] = React.useState(false);
  const [edit2, toggleEdit2] = React.useState(false);

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
                <h4>
                  Image Gallery View
                  <span className='green-btn' onClick={() => handleClick()}>
                    <img src={plus} alt='logo' /> Add Image Gallery
                  </span>
                </h4>
              </div>
              <div className='card-category'>
              <h4>Filter By</h4>
              <div className='custom-input'>
                <Form.Control
                  as='select'
                 
                >
                  <option>2 & 3 Wheeler Solution</option>
                  <option>Bus Solution</option>
                  <option>Launches</option>
                  <option>Events</option>
                </Form.Control>
              </div>
            </div>
              <div className='news-card media-card'>
                <div className='coverage-card'>
                  <div className='news-card-img'>
                    <img src={image} alt='logo' />
                    <div className='overlay-cov'></div>
                    <div className='edit-sec' onClick={() => toggleEdit(!edit)}>
                      <img src={more} alt='more' />
                    </div>

                    {edit && (
                      <div className='edit-box'>
                        <ul className='list-unstyled'>
                          <li onClick={() => handleClick()}>Edit</li>
                          <li onClick={handleShow}>Delete</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div className='coverage-card'>
                  <div className='news-card-img'>
                    <img src={imageauto} alt='logo' />
                    <div className='overlay-cov'></div>
                    <div
                      className='edit-sec'
                      onClick={() => toggleEdit1(!edit1)}
                    >
                      <img src={more} alt='more' />
                    </div>

                    {edit1 && (
                      <div className='edit-box'>
                        <ul className='list-unstyled'>
                          <li onClick={() => handleClick()}>Edit</li>
                          <li onClick={handleShow}>Delete</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div className='coverage-card'>
                  <div className='news-card-img'>
                    <img src={imageauto} alt='logo' />
                    <div className='overlay-cov'></div>
                    <div
                      className='edit-sec'
                      onClick={() => toggleEdit2(!edit2)}
                    >
                      <img src={more} alt='more' />
                    </div>

                    {edit2 && (
                      <div className='edit-box'>
                        <ul className='list-unstyled'>
                          <li onClick={() => handleClick()}>Edit</li>
                          <li onClick={handleShow}>Delete</li>
                        </ul>
                      </div>
                    )}
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
                        <Button
                          className='green-btn cancel'
                          onClick={handleClose}
                        >
                          No
                        </Button>
                        <Button className='green-btn' onClick={handleClose}>
                          Yes
                        </Button>
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

export default ImageGalleryView;
