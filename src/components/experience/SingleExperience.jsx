import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import './expstyle.css'

const SingleExperience = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container id="container-wrapper" className="mt-4">
      <Row className="mt-3">
        <Col>
          <h4>Experience</h4>
        </Col>
        <Col className="icons-col">
          <img src="/images/plus-icon.svg" alt="" />
          <img
            src="/images/pencil.svg"
            alt=""
            onClick={handleShow}
          />
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={2}>
          <img src={props.data.image} alt="" />
        </Col>
        <Col md={4} id="text-col">
          <h6>{props.data.role}</h6>
          <span>{props.data.company}</span>
          <p>
            {props.data.startDate} - {props.data.endDate} - {props.data.area}
          </p>
        </Col>
      </Row>
      <hr className="style-hr" />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div>
              <label>Title</label>
              <input
                type="text"
                placeholder="Your Role"
                required
                style={{ width: "100%" }}
              ></input>
            </div>

            <div>
              <label>Employment Type</label>
              <select
                type="select"
                placeholder="Please select"
                required
                style={{ width: "100%" }}
              >
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Self-employed</option>
                <option>Freelance</option>
                <option>Contract</option>
                <option>Internship</option>
                <option>Apprenticeship</option>
                <option>Seasonal</option>
              </select>
            </div>

            <div>
              <label>Company Name</label>
              <input
                type="text"
                placeholder="Company Name"
                required
                style={{ width: "100%" }}
              ></input>
            </div>
            <div>
              <label>Location</label>
              <input
                type="text"
                placeholder="Ex. London, UK"
                required
                style={{ width: "100%" }}
              ></input>
            </div>
            <div>
              <label>Start date</label>

              <input
                type="date"
                id="start"
                name="trip-start"
                value="2020-05-04"
                min="2010-01-01"
                max="2022-12-31"
                style={{ width: "100%" }}
                ></input>
            </div>
            <div>
              <label>End date</label>

              <input
                type="date"
                id="start"
                name="trip-start"
                value="2022-03-29"
                min="2010-01-01"
                max="2022-12-31"
                style={{ width: "100%" }}
                ></input>
            </div>
            <div>
                <label> Description</label>
                <textarea id="w3review" name="w3review" rows="4" cols="60"></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default SingleExperience;

