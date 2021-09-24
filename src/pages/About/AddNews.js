import React from "react";

import { Form } from "react-bootstrap";

import close from "../../assets/images/close.png";

const AddNews = ({ handleAddNews, handleRemoveNews }) => {
  return (
    <div className="add-news">
      <h2 onClick={handleRemoveNews}>
          <img src={close} alt="logo" />
        </h2>
      <div className="custom-input">
        <label>News Banner*</label>
        <Form.File id="exampleFormControlFile1" />
      </div>
      <div className="custom-input">
        <label>News Heading*</label>
        <Form.Control as="textarea" rows="5" placeholder="Enter Description" />
      </div>
      <div className="custom-input">
        <label>News Url*</label>
        <Form.Control type="text" placeholder="Enter Description" />
      </div>
    </div>
  );
};

export default AddNews;
