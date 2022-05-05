import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import "./singleUser.css"
import { Link } from "react-router-dom"

const SingleUser = (props) => {
  return (
    <Container className="mb-3">
      <Row>
        <Col md={2} className="image-section__singleUser">
          <img src={props.data.image} alt="" srcset="" className="single-user-img" />
        </Col>
        <Col md={9} className="mt-1">
          <Link to={`/profile/` + props.data._id}>
            <p className="name__singleUser">
              {props.data.name} <span>- 2nd</span>
            </p>
          </Link>
          <p className="userTitle__singleUser">{props.data.title}</p>
          <Button variant="outline-secondary" className="button__singleUser smallerButtons">
            Connect
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default SingleUser
