import React, { useState } from 'react';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import '../Home/home.css';
import '../Media/media.css';
import { Button, Modal, Col, Row } from 'react-bootstrap';
import videos from '../../assets/images/videos/corporate.png';
import Continue from '../Continue/Continue';
import close from '../../assets/images/close.svg';
import plus from '../../assets/images/plus.png';
import more from '../../assets/images/more.svg';
import { Form } from 'react-bootstrap';

const Videosview = () => {
  const handleClick = () => {
    window.location.href = '/videosform';
  };
  const [edit, toggleEdit] = React.useState(false);
  const [edit1, toggleEdit1] = React.useState(false);
  const [edit2, toggleEdit2] = React.useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showYoutube, setShowYoutube] = useState(false);
  const handleCloseYoutube = () => setShowYoutube(false);
  const handleShowYoutube = () => setShowYoutube(true);

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
                  Videos View
                  <span className='green-btn' onClick={() => handleClick()}>
                    <img src={plus} alt='logo' /> Add Video
                  </span>
                </h4>
              </div>
              <div className='card-category'>
                <h4>Filter By</h4>
                <div className='custom-input'>
                  <Form.Control as='select'>
                    <option>Corporate Video</option>
                    <option>2 & 3 Wheeler Solution</option>
                    <option>Bus Solution</option>
                    <option>Testimonials</option>
                    <option>Interviews</option>
                    <option>Events</option>
                  </Form.Control>
                </div>
              </div>
              <div className='news-card media-card'>
                <div className='coverage-card '>
                  <div className='news-card-img'>
                    <img src={videos} alt='logo' />
                    <div class='watch-video-icon' onClick={handleShowYoutube}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='40'
                        height='40'
                        viewBox='0 0 42.7 42.7'
                      >
                        <path
                          class='a'
                          d='M21.741-50A21.369,21.369,0,0,0,.391-28.65,21.369,21.369,0,0,0,21.741-7.3a21.369,21.369,0,0,0,21.35-21.35A21.369,21.369,0,0,0,21.741-50Zm6.877,22.429-10.068,6.7a1.3,1.3,0,0,1-2.023-1.079V-35.347a1.3,1.3,0,0,1,2.023-1.079l10.068,6.7A1.3,1.3,0,0,1,28.618-27.571Z'
                          transform='translate(-0.391 50)'
                        />
                      </svg>
                    </div>
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
                  <div className='news-card-text coverage-card-text video-text'>
                    <p>SUN Mobility Corporate Film</p>
                    <label>by SUN Mobility</label>
                    <span>1,677 views • Dec 6, 2018</span>
                  </div>
                </div>

                <div className='coverage-card '>
                  <div className='news-card-img'>
                    <img src={videos} alt='logo' />
                    <div class='watch-video-icon' onClick={handleShowYoutube}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='40'
                        height='40'
                        viewBox='0 0 42.7 42.7'
                      >
                        <path
                          class='a'
                          d='M21.741-50A21.369,21.369,0,0,0,.391-28.65,21.369,21.369,0,0,0,21.741-7.3a21.369,21.369,0,0,0,21.35-21.35A21.369,21.369,0,0,0,21.741-50Zm6.877,22.429-10.068,6.7a1.3,1.3,0,0,1-2.023-1.079V-35.347a1.3,1.3,0,0,1,2.023-1.079l10.068,6.7A1.3,1.3,0,0,1,28.618-27.571Z'
                          transform='translate(-0.391 50)'
                        />
                      </svg>
                    </div>
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
                  <div className='news-card-text coverage-card-text video-text'>
                    <p>SUN Mobility Corporate Film</p>
                    <label>by SUN Mobility</label>
                    <span>1,677 views • Dec 6, 2018</span>
                  </div>
                </div>
                <div className='coverage-card '>
                  <div className='news-card-img'>
                    <img src={videos} alt='logo' />
                    <div class='watch-video-icon' onClick={handleShowYoutube}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='40'
                        height='40'
                        viewBox='0 0 42.7 42.7'
                      >
                        <path
                          class='a'
                          d='M21.741-50A21.369,21.369,0,0,0,.391-28.65,21.369,21.369,0,0,0,21.741-7.3a21.369,21.369,0,0,0,21.35-21.35A21.369,21.369,0,0,0,21.741-50Zm6.877,22.429-10.068,6.7a1.3,1.3,0,0,1-2.023-1.079V-35.347a1.3,1.3,0,0,1,2.023-1.079l10.068,6.7A1.3,1.3,0,0,1,28.618-27.571Z'
                          transform='translate(-0.391 50)'
                        />
                      </svg>
                    </div>
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
                  <div className='news-card-text coverage-card-text video-text'>
                    <p>SUN Mobility Corporate Film</p>
                    <label>by SUN Mobility</label>
                    <span>1,677 views • Dec 6, 2018</span>
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
              <Modal
                show={showYoutube}
                onHide={handleCloseYoutube}
                animation={false}
                className='watch-youtube'
              >
                <div className='continue-close' onClick={handleCloseYoutube}>
                  <img src={close} alt='text'></img>
                </div>
                <Modal.Body>
                  <div>
                    <iframe
                      width='90%'
                      src='https://www.youtube.com/embed/VD0zL5Eb6A4?showinfo=0&rel=0&autoplay=1&mute=1'
                      frameborder='0'
                      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                      allowfullscreen='true'
                      width='100%'
                      height='570px'
                    ></iframe>
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

export default Videosview;
