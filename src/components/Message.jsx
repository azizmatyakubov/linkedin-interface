import React, { useState } from "react";
import styled from "styled-components";
import TimeAgo from "timeago-react";
import { Modal, Form, Button } from "react-bootstrap";

const Message = (props) => {
  const [show, setShow] = useState(false); // this is for showing Modal
  const [postText, setPostText] = useState("there should be post text"); // this is for modal
  const [selectedPostId, setSelectedPostId] = useState(); // this is storing selected post id

  const handleClose = () => setShow(false);

  // when user click edit post text, this function runs
  const handleShow = (id) => {
    console.log(id, "this is post id");
    setShow(true); // display modal
    fetchPostById(id);
    setSelectedPostId(id);
  };

  // fetch post with id and storing to 'postText' state 
  const fetchPostById = async (id) => {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/posts/" + id,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMTMxZWQzMzk4NDAwMTVjODgzYmIiLCJpYXQiOjE2NDg0OTc0MzgsImV4cCI6MTY0OTcwNzAzOH0.sLkbyZFjVCiLvfgrcA9MnJiefoO2BW2iMooxrirJlnU",
        },
      }
    );
    let data = await res.json();
    setPostText(data); //setting state
  };

  // there is button on Modal, when it clicks, this function runs 
  const handleChange = async () => {
    changePostById(selectedPostId); //selectedPostId is coming from state
  };

  // it will send PUT request to server in order to change POST text 
  const changePostById = async (id) => {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/posts/" + id,
      {
        method: "PUT",
        body: JSON.stringify(postText),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMTMxZWQzMzk4NDAwMTVjODgzYmIiLCJpYXQiOjE2NDg0OTc0MzgsImV4cCI6MTY0OTcwNzAzOH0.sLkbyZFjVCiLvfgrcA9MnJiefoO2BW2iMooxrirJlnU",
        },
      }
    );
    if (res.ok) {
      console.log("UPDATED");
      props.getPosts(); // if response is ok, we need to get all posts one more time from server
      handleClose(); // after all operation, we need to close modal
    }
  };

  return (
    <div>
      {props.data
        .slice(-5) // only showing last 5 posts
        .reverse() // last messages should be on top
        .map((post) => (
          <>
            <Wrapper>
              <Header>
                <img src={post.image} alt="img" />
                <div>
                  <h6>{post.username}</h6>
                  <p>{post.user.title}</p>
                  <p>
                    <TimeAgo datetime={post.updatedAt} /> 
                  </p>
                </div>

                <p onClick={() => handleShow(post._id)}>Edit Post</p> 
               
              </Header>
              <Body>
                <p>{post.text}</p>
                <div>
                  <img src="https://img.icons8.com/color/48/000000/plus--v3.png" />
                  <span>129</span>
                  <span>1 comments</span>
                </div>
              </Body>

              <Footer>
                <Section>
                  <img src="/images/hand-thumbs-up.svg" alt="" srcset="" />
                  Like
                </Section>
                <Section>
                  <img src="/images/chat-dots.svg" alt="" srcset="" />
                  Comment
                </Section>
                <Section>
                  <img src="/images/share.svg" alt="" srcset="" />
                  Share
                </Section>
                <Section>
                  <img src="/images/send.svg" alt="" srcset="" />
                  Send
                </Section>
              </Footer>
            </Wrapper>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add Experience</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>Company</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Company"
                      className="mt-1"
                      value={postText.text}
                      onChange={(e) =>
                        setPostText({ ...postText, text: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Button
                    variant="success"
                    type="button"
                    onClick={handleChange}
                  >
                    Add
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>
          </>
        ))}
    </div>
  );
};;

export default Message;

const Wrapper = styled.div`
  background-color: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  width: 100%;
  min-height: 5rem;
  padding: 1rem 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Header = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 1rem;
  }

  div {
    p {
      margin: 0;
      font-size: 12px;
      color: gray;
      margin-bottom: 0;
      margin-top: 0;
    }
    h6 {
      margin: 0;
    }
    margin-right: auto;
  }
`;

const Body = styled.div`
  margin-top: 1rem;
  font-size: 14px;
  font-weight: 400;

  div {
    cursor: pointer;
    display: flex;
    align-items: center;
    img {
      width: 1rem;
      height: 1rem;
    }
    span {
      color: gray;
      font-size: 12px;
      font-weight: 400;
      margin-left: 2px;
    }

    span:nth-child(3) {
      margin-left: auto;
    }
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  width: 100%;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #e6e6e6;
`;

const Section = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s;
  padding: 0.7rem 0.5rem;
  border-radius: 4px;
  color: gray;
  img {
    width: 1.5rem;
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: #dddddd;
  }
`;
