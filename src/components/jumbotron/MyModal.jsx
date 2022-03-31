import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function MyModal({ show, setShow, setProfilePicture }) {
  const [image, setImage] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    console.log(e);
    setImage(e);
  };
  const uploadImage = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/624601edec507a0015740d9b/picture`,
        {
          method: "POST",
          body: image,
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQ2MDFlZGVjNTA3YTAwMTU3NDBkOWIiLCJpYXQiOjE2NDg3NTUxODIsImV4cCI6MTY0OTk2NDc4Mn0.MPgrw60d1faTTD9dCdcT6gqyYAeP5c5oEP2Q-RHXvLk",
          },
        }
      );
      if (response.ok) {
        setProfilePicture(image);
        console.log("Image Successfully Uploaded");
      } else {
        console.error("Uploading Failed");
      }
    } catch (error) {
      console.error(error);
    }
    setShow(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="upload image url"
            value={image}
            onChange={(e) => handleChange(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={uploadImage}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
