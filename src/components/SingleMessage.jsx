import React, { useState } from "react";
import styled from "styled-components";
import ReactTimeAgo from "react-time-ago";
import { Modal, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CommentSection from "./CommentSection";

const SingleMessage = ({ post, getPosts }) => {
  const [show, setShow] = useState(false); // this is for showing Modal
  const [showComment, setShowComment] = useState(false);
  const [postText, setPostText] = useState(""); // this is for modal

  const [selectedPostId, setSelectedPostId] = useState(); // this is storing selected post id
  const handleClose = () => setShow(false);

  // when user click edit post text, this function runs
  const handleShow = (id) => {
    setShow(true); // display modal
    fetchPostById(id);
    setSelectedPostId(id);
  };

  // fetch post with id and storing to 'postText' state
  const fetchPostById = async (id) => {
    let res = await fetch(
      "https://linkedin-backend-01.herokuapp.com/post/" + id,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let data = await res.json();
    setPostText(data.text); //setting state
  };

  const handleChange = async () => {
    changePostById(selectedPostId, "PUT"); //selectedPostId is coming from state
  };

  const handleDelete = async () => {
    changePostById(selectedPostId, "DELETE");
  };

  // it will send PUT request to server in order to change POST text
  const changePostById = async (id, method) => {
    let res = await fetch(
      "https://linkedin-backend-01.herokuapp.com/post/" + id,
      {
        method: method,
        body: JSON.stringify({ text: postText }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.ok) {
      console.log(method);
      getPosts(); // if response is ok, we need to get all posts one more time from server
      handleClose(); // after all operation, we need to close modal
      setPostText("");
    }
  };

  return (
    <>
      <Wrapper>
        <Header>
          <img src={post.user.image} alt="img" />
          <div>
            <h6>
              <Link to={"/profile/" + post.user._id}>{post.user.name}</Link>
            </h6>
            <p>{post.user.title}</p>
            <p>{<ReactTimeAgo date={post.updatedAt} />}</p>
          </div>
          {/* {post.user._id === "6242131ed339840015c883bb" && ( */}
          <Button variant="outline-dark" onClick={() => handleShow(post._id)}>
            Edit Post
          </Button>
          {/* )} */}
        </Header>
        <Body>
          <p>{post.text}</p>

          <img src={post.image} alt="" srcset="" />

          <div>
            <img
              src="https://img.icons8.com/color/48/000000/plus--v3.png"
              alt="blue-background"
            />
            <span>129</span>
            <span>2 comments</span>
          </div>
        </Body>

        <Footer>
          <Section>
            <img src="/images/hand-thumbs-up.svg" alt="" srcset="" />
            Like
          </Section>
          <Section onClick={() => setShowComment(true)}>
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
        {/* Display comment section  */}
        {/* {showComment && <CommentSection />} */}
      </Wrapper>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Your post</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your text"
                className="mt-1"
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="success"
              type="button"
              onClick={handleChange}
              className="mr-2"
            >
              Update
            </Button>
            <Button variant="danger" type="button" onClick={handleDelete}>
              Delete
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleMessage;

const Wrapper = styled.div`
  background-color: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
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
  img {
    width: 100%;
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
