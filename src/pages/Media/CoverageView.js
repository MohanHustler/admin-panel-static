import React, { useState } from 'react';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import '../Home/home.css';
import '../Media/media.css';
import { Button, Modal, Col, Row } from 'react-bootstrap';
import coverage from '../../assets/images/coverage/1.png';
import auto from '../../assets/images/coverage/2.png';
import man from '../../assets/images/coverage/3.png';
import coveragelogo from '../../assets/images/coverage/icon/time_of_india.png';
import business from '../../assets/images/coverage/icon/business_standard.png';
import times from '../../assets/images/coverage/icon/time_of_india.png';

import Continue from '../Continue/Continue';
import close from '../../assets/images/close.svg';
import plus from '../../assets/images/plus.png';
import more from '../../assets/images/more.svg';
import { Form } from 'react-bootstrap';

const CoverageView = () => {
  const [option, setOption] = useState('Feature');
  console.log(option);

  const handleClick = () => {
    window.location.href = '/coverageform';
  };

  const [edit, toggleEdit] = React.useState(false);
  const [edit1, toggleEdit1] = React.useState(false);
  const [edit2, toggleEdit2] = React.useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    toggleEdit(false);
  };

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
                  Coverage View
                  <span className='green-btn' onClick={() => handleClick()}>
                    <img src={plus} alt='logo' /> Add Coverage
                  </span>
                </h4>
              </div>
              <div className='card-category'>
                <h4>Filter By</h4>
                <div className='custom-input'>
                  <Form.Control
                    as='select'
                    onChange={(event) => setOption(event.target.value)}
                  >
                    <option>Featured</option>
                    <option>Partnership</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                  </Form.Control>
                </div>
              </div>
              <div className={`hide ${option === 'Feature' && 'show'}`}>
                {/* <h4 className='category-head'>Featured Card</h4> */}
                <div className='news-card media-card'>
                  <div className='coverage-card '>
                    <a>
                      <div className='news-card-img coverage-img'>
                        <img src={coverage} alt='logo' />
                        <div className='overlay-cov'></div>
                        <div
                          className='edit-sec'
                          onClick={() => toggleEdit(!edit)}
                        >
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
                      <div className='news-card-text coverage-card-text'>
                        <span>
                          <img src={coveragelogo} alt='logo' />
                        </span>
                        <p>
                          City’s first battery swapping station for EVs in the
                          works
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='coverage-card'>
                    <a>
                      <div className='news-card-img'>
                        <img src={auto} alt='logo' />
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
                      <div className='news-card-text coverage-card-text'>
                        <span>
                          <img src={business} alt='logo' />
                        </span>
                        <p>Electric dreams</p>
                      </div>
                    </a>
                  </div>
                  <div className='coverage-card'>
                    <a href="/">
                      <div className='news-card-img'>
                        <img src={man} alt='logo' />
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
                      <div className='news-card-text coverage-card-text'>
                        <span>
                          <img src={times} alt='logo' />
                        </span>
                        <p>
                          City’s first battery swapping station for EVs in the
                          works
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className={`hide ${option === 'Partnership' && 'show'}`}>
                {/* <h4 className='category-head'>Partnership Card</h4> */}
                <div className='news-card media-card'>
                  <div className='coverage-card '>
                    <a href='' target='_blank'>
                      <div className='news-card-img coverage-img'>
                        <img src={coverage} alt='logo' />
                        <div className='overlay-cov'></div>
                        <div
                          className='edit-sec'
                          onClick={() => toggleEdit(!edit)}
                        >
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
                      <div className='news-card-text coverage-card-text'>
                        <span>
                          <img src={coveragelogo} alt='logo' />
                        </span>
                        <p>
                          City’s first battery swapping station for EVs in the
                          works
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='coverage-card'>
                    <a href='' target='_blank'>
                      <div className='news-card-img'>
                        <img src={coverage} alt='logo' />
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
                      <div className='news-card-text coverage-card-text'>
                        <span>
                          <img src={business} alt='logo' />
                        </span>
                        <p>Electric dreams</p>
                      </div>
                    </a>
                  </div>
                  <div className='coverage-card'>
                    <a href='' target='_blank'>
                      <div className='news-card-img'>
                        <img src={man} alt='logo' />
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
                      <div className='news-card-text coverage-card-text'>
                        <span>
                          <img src={times} alt='logo' />
                        </span>
                        <p>
                          City’s first battery swapping station for EVs in the
                          works
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className={`hide ${option === '2020' && 'show'}`}>
                {/* <h4 className='category-head'>2020</h4> */}
                <div className='news-card media-card'>
                  <div className='coverage-card '>
                    <a href='' target='_blank'>
                      <div className='news-card-img coverage-img'>
                        <img src={coverage} alt='logo' />
                        <div className='overlay-cov'></div>
                        <div
                          className='edit-sec'
                          onClick={() => toggleEdit(!edit)}
                        >
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
                      <div className='news-card-text coverage-card-text'>
                        <span>
                          <img src={coveragelogo} alt='logo' />
                        </span>
                        <p>
                          City’s first battery swapping station for EVs in the
                          works
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='coverage-card'>
                    <a href='' target='_blank'>
                      <div className='news-card-img'>
                        <img src={coverage} alt='logo' />
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
                      <div className='news-card-text coverage-card-text'>
                        <span>
                          <img src={business} alt='logo' />
                        </span>
                        <p>Electric dreams</p>
                      </div>
                    </a>
                  </div>
                  <div className='coverage-card'>
                    <a href='' target='_blank'>
                      <div className='news-card-img'>
                        <img src={man} alt='logo' />
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
                      <div className='news-card-text coverage-card-text'>
                        <span>
                          <img src={times} alt='logo' />
                        </span>
                        <p>
                          City’s first battery swapping station for EVs in the
                          works
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className={`hide ${option === '2019' && 'show'}`}>
                {/* <h4 className='category-head'>2019</h4> */}
                <div className='news-card media-card'>
                  <div className='coverage-card '>
                    <div className='news-card-img coverage-img'>
                      <img src={coverage} alt='logo' />
                      <div className='overlay-cov'></div>
                      <div
                        className='edit-sec'
                        onClick={() => toggleEdit(!edit)}
                      >
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
                    <div className='news-card-text coverage-card-text'>
                      <span>
                        <img src={coveragelogo} alt='logo' />
                      </span>
                      <p>
                        City’s first battery swapping station for EVs in the
                        works
                      </p>
                    </div>
                  </div>
                  <div className='coverage-card'>
                    <div className='news-card-img'>
                      <img src={coverage} alt='logo' />
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
                    <div className='news-card-text coverage-card-text'>
                      <span>
                        <img src={business} alt='logo' />
                      </span>
                      <p>Electric dreams</p>
                    </div>
                  </div>
                  <div className='coverage-card'>
                    <div className='news-card-img'>
                      <img src={man} alt='logo' />
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
                    <div className='news-card-text coverage-card-text'>
                      <span>
                        <img src={times} alt='logo' />
                      </span>
                      <p>
                        City’s first battery swapping station for EVs in the
                        works
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`hide ${option === '2018' && 'show'}`}>
                {/* <h4 className='category-head'>2018</h4> */}
                <div className='news-card media-card'>
                  <div className='coverage-card '>
                    <div className='news-card-img coverage-img'>
                      <img src={coverage} alt='logo' />
                      <div className='overlay-cov'></div>
                      <div
                        className='edit-sec'
                        onClick={() => toggleEdit(!edit)}
                      >
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
                    <div className='news-card-text coverage-card-text'>
                      <span>
                        <img src={coveragelogo} alt='logo' />
                      </span>
                      <p>
                        City’s first battery swapping station for EVs in the
                        works
                      </p>
                    </div>
                  </div>
                  <div className='coverage-card'>
                    <div className='news-card-img'>
                      <img src={coverage} alt='logo' />
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
                    <div className='news-card-text coverage-card-text'>
                      <span>
                        <img src={business} alt='logo' />
                      </span>
                      <p>Electric dreams</p>
                    </div>
                  </div>
                  <div className='coverage-card'>
                    <div className='news-card-img'>
                      <img src={man} alt='logo' />
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
                    <div className='news-card-text coverage-card-text'>
                      <span>
                        <img src={times} alt='logo' />
                      </span>
                      <p>
                        City’s first battery swapping station for EVs in the
                        works
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`hide ${option === '2017' && 'show'}`}>
                {/* <h4 className='category-head'>2017</h4> */}
                <div className='news-card media-card'>
                  <div className='coverage-card '>
                    <div className='news-card-img coverage-img'>
                      <img src={coverage} alt='logo' />
                      <div className='overlay-cov'></div>
                      <div
                        className='edit-sec'
                        onClick={() => toggleEdit(!edit)}
                      >
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
                    <div className='news-card-text coverage-card-text'>
                      <span>
                        <img src={coveragelogo} alt='logo' />
                      </span>
                      <p>
                        City’s first battery swapping station for EVs in the
                        works
                      </p>
                    </div>
                  </div>
                  <div className='coverage-card'>
                    <div className='news-card-img'>
                      <img src={coverage} alt='logo' />
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
                    <div className='news-card-text coverage-card-text'>
                      <span>
                        <img src={business} alt='logo' />
                      </span>
                      <p>Electric dreams</p>
                    </div>
                  </div>
                  <div className='coverage-card'>
                    <div className='news-card-img'>
                      <img src={man} alt='logo' />
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
                    <div className='news-card-text coverage-card-text'>
                      <span>
                        <img src={times} alt='logo' />
                      </span>
                      <p>
                        City’s first battery swapping station for EVs in the
                        works
                      </p>
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

export default CoverageView;
