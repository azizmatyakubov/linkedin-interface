import { Container, Row, Col, Modal, Button, Form} from "react-bootstrap";
import './expstyle.css'
import { useState, useEffect} from "react";

const SingleExperience = (props) => {
  console.log("THIS IS PROPS", props)
  console.log("THIS IS ID", props.data._id)

  const [show, setShow] = useState(false);
 /*  const [experienceText, setExperienceText] = useState();
  const [selectedExpId, setSelectedExpId] = useState(); */

  const handleClose = () => {
    
    setShow(false)
    deleteSingleExp()
  };

  //I RETRIEVED THE ID BUT IT DOESNT WORK WHEN I PASS IT INTO
  // handleSHow as a parameter

  const handleShow = () =>{ 
  console.log(props.data._id, "this is exp id")
  setShow(true)
  fetchExpById()
  };

 

const fetchExpById= async(props) =>{
  let response= await fetch(
    "https://striveschool-api.herokuapp.com/api/profile/6242131ed339840015c883bb/experiences" + props.data._id,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQzOGQyY2MzNjA3MDAwMTVmNmZkMzMiLCJpYXQiOjE2NDg1OTQyMjAsImV4cCI6MTY0OTgwMzgyMH0.VHqhiens_PkTS2JO-8hNQOytWeTf7PkUQsG9GfchqhY",
        },
      }
  )
  let data = await response.json();
  console.log("THIS IS DATA",data)
}


const deleteSingleExp= async(props) => {

  let response = await fetch (
    "https://striveschool-api.herokuapp.com/api/profile/6242131ed339840015c883bb/experiences" + props.data._id,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQzOGQyY2MzNjA3MDAwMTVmNmZkMzMiLCJpYXQiOjE2NDg1OTQyMjAsImV4cCI6MTY0OTgwMzgyMH0.VHqhiens_PkTS2JO-8hNQOytWeTf7PkUQsG9GfchqhY",
      },
    }
)
let data = await response.json();
console.log("THIS IS DELETE DATA",data)
}



  return (
    <>
    <Container className="mt-4">
      <Row className="mt-3">
        <Col md={2}>
          <img src={props.data.image} alt="" />
        </Col>
        <Col md={4} id="text-col">
          <h6 onClick={handleShow}>{props.data.role}</h6>
          <span>{props.data.company}</span>
          <p>
            {props.data.startDate} - {props.data.endDate} - {props.data.area}
          </p>
        </Col>
      </Row>
      <hr className="style-hr" />
    </Container>

<Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Experience</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group>
                    {/*<Form.Label>Company</Form.Label>
                     <Form.Control
                      type="text"
                      placeholder="Company"
                      className="mt-1"
                      value={experienceText.text}
                      onChange={(e) =>
                        setExperienceText({ ...experienceText, text: e.target.value })
                      }
                    /> */}
                  </Form.Group>

                  <Button
                    variant="danger"
                    type="button"
                    onClick={deleteSingleExp} 
                  >
                   Delete
                  </Button>
                  <Button
                    variant="success"
                    className="mx-2"
                    type="button"
                   /*  onClick={handleChange()} */
                  >
                   Add
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>

            </>
  );
};

export default SingleExperience;

