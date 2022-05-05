import React, { useState } from "react";
import styled from "styled-components";

const PostHome = ({ myProfile, getPosts }) => {
  const [inputValue, setInputValue] = useState("");
  // write new post
  const _handleSubmit = async (e) => {
    if (e.key === "Enter") {
      try {
        const response = await fetch(
          "https://linkedin-backend-01.herokuapp.com/post",
          {
            method: "POST",
            body: JSON.stringify({
              text: inputValue, // inputValue from state
              user: myProfile._id,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          getPosts(); // if we send POST reqeust successfully, we need to get all posts one more time
          setInputValue(""); // Clearing input value
        } else {
          console.log("User cannot write new post");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Wrapper>
        <Header>
          {myProfile && <img src={myProfile.image} alt="profile-avatar" />}
          <Input
            type="text"
            placeholder="Start post"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)} // whem users type something, this function setState
            onKeyPress={_handleSubmit}
          />
        </Header>
        <Footer>
          <Section>
            <img src="/images/photo-home.png" alt="yellow-square-mountains" />
            Photo
          </Section>
          <Section>
            <img
              src="https://img.icons8.com/color/48/000000/icons8-new-logo.png"
              alt="video"
            />
            Video
          </Section>
          <Section>
            <img
              src="https://img.icons8.com/color/48/000000/clock--v4.png"
              alt="event"
            />
            Event
          </Section>
          <Section>
            <img
              src="https://img.icons8.com/color/48/000000/scroll.png"
              alt="article"
            />
            Write article
          </Section>
        </Footer>
      </Wrapper>
    </>
  );
};

export default PostHome;

const Wrapper = styled.div`
  padding: 1rem 1rem;
  min-height: 5rem;
  border-radius: 6px;
  border: 1px solid #e6e6e6;
  background-color: white;
  margin-bottom: 1rem;
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
`;

const Input = styled.input`
  flex-grow: 1;
  height: 100%;
  border-radius: 25px;
  border: 1px solid #adadad;
  padding: 0 1rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  width: 100%;
  margin-top: 1rem;
`;

const Section = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s;
  padding: 0.7rem 0.5rem;
  border-radius: 4px;

  img {
    width: 1.5rem;
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: #dddddd;
  }
`;
