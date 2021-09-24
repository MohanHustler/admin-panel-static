import React, {useState} from 'react';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import '../Home/home.css';
import { Modal, Form, Button } from 'react-bootstrap';
import plus from '../../assets/images/plus.png';
import close from '../../assets/images/close.svg';



const MediakitForm = () => {
  const handleClick = () => {
    window.location.href = '/mediakitview';
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [edit, setEdit] = useState(false);
  const editClose = () => setEdit(false);
  const editShow = () => setEdit(true);


  const [del, setDel] = useState(false);
  const delClose = () => setDel(false);
  const delShow = () =>{
      setDel(true);
  }

  return (
    <div className='dashboard'>
      <Header />
      <div className='dashboard-wrapper'>
        <Sidebar />
        <div className='dashboard-container'>
          <div className='dashboard-inner-container'>
            <div className='news-form'>
              <div className='signin-card-head'>
                <h4>Mediakit Form</h4>
                <p>Enter your details below</p>
              </div>
              <Form>
                <div className='custom-input'>
                  <label>Mediakit category*</label>
                  <Form.Control as='select'>
                  <option>Logos</option>
                  <option>Company</option>
                  <option>Profiles of Leadership</option>
                  <option>Product images</option>
                  <option>Fact Sheet</option>
                  <option>Awards and Accolades</option>
                  </Form.Control>
                  <div className='add-category'>
                    <ul className="list-unstyled">
                      <li onClick={editShow}>
                        Edit Category
                      </li>
                      <li>

                      </li>
                      <li onClick={handleShow}>
                        Add Category
                      </li>
                    </ul>
                  </div>
                </div>
              
                <div className='custom-input'>
                  <label>Mediakit Type*</label>
                  <Form.Control as='select'>
                  <option>PNG</option>
                  <option>JPG</option>
                  <option>PDF</option>
                  </Form.Control>
                </div>
                <div className='custom-input'>
                  <label>Upload PDF*</label>
                  <Form.File id='exampleFormControlFile1' />
                </div>
                <div className='custom-input'>
                  <label>Mediakit Banner Image*</label>
                  <Form.File id='exampleFormControlFile1' />
                </div>
                
                <div className='custom-input'>
                  <label>Mediakit Heading*</label>
                  <Form.Control
                    type='text'
                    placeholder='Enter Videos Heading'
                  />
                </div>
              </Form>
              <div className='form-button-section'>
                <Button className='white-btn' onClick={() => handleClick()}>
                  Cancel
                </Button>
                <Button className='green-btn' onClick={() => handleClick()}>
                  Submit
                </Button>
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
                      <h2>Add Category</h2>
                      <div className="custom-input">
                      <Form.Control
                    type='text'

                    placeholder='Enter Category'
                  />
                      </div>

                      <div className='send-button'>
                        <Button
                          className='green-btn cancel'
                          onClick={handleClose}
                        >
                          Cancel
                        </Button>
                        <Button className='green-btn' onClick={handleClose}>
                          Add
                        </Button>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>

              <Modal
              show={edit}
                onHide={editClose}
                animation={false}
                className='continue-popup'
              >
                <div className='continue-close' onClick={editClose}>
                  <img src={close} alt='text'></img>
                </div>
                <Modal.Body>
                  <div className='continue'>
                    <div className='continue-content'>
                      <h2>Edit Category</h2>
                      <div className="delete-section">
                      <div className="content-delete">
                      <div className="custom-input">
                      <Form.Control
                    type='text'
                  />
                      </div>
                      <Button
                          className='green-btn red'
                          onClick={delShow}
                        >
                          
                         Delete
                        </Button>
                      </div>
                      <div className="content-delete">
                      <div className="custom-input">
                      <Form.Control
                    type='text'
                  />
                      </div>
                      <Button
                          className='green-btn red'
                          onClick={delShow}
                        >
                         Delete
                        </Button>
                      </div>
                      <div className="content-delete">
                      <div className="custom-input">
                      <Form.Control
                    type='text'
                  />
                      </div>
                      <Button
                          className='green-btn red'
                          onClick={delShow}
                        >
                         Delete
                        </Button>
                      </div>
                     

                      </div>
                      <div className='send-button'>
                        <Button
                          className='green-btn cancel'
                          onClick={editClose}
                        >
                          Cancel
                        </Button>
                        <Button className='green-btn' onClick={editClose}>
                          Save
                        </Button>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>

              <Modal
                show={del}
                onHide={delClose}
                animation={false}
                className='continue-popup'
              >
                <div className='continue-close' onClick={delClose}>
                  <img src={close} alt='text'></img>
                </div>
                <Modal.Body>
                  <div className='continue'>
                    <div className='continue-content'>
                      <h2>Deleting this will delete all content inside caegory</h2>
                     

                      <div className='send-button'>
                        <Button
                          className='green-btn cancel'
                          onClick={delClose}
                        >
                          Cancel
                        </Button>
                        <Button className='green-btn red' onClick={delClose}>
                          Delete
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

export default MediakitForm;
