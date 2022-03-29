import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const PostHome = () => {
  return (
    <Wrapper>
      <Header>
        <img
          src="https://likewise-stage.azureedge.net/uploads/3eb6cf23-895b-45e9-b92c-5fb1b457dd04/bill-gates-profile-pic.jpg"
          alt=""
          srcset=""
        />
        <Input type="text" placeholder="Start post" />
      </Header>
      <Footer>
        <Section>
          <img src="https://img.icons8.com/color/48/000000/picture--v1.png" />
          Photo
        </Section>
        <Section>
          <img src="https://img.icons8.com/color/48/000000/icons8-new-logo.png" />
          Video
        </Section>
        <Section>
          <img src="https://img.icons8.com/color/48/000000/clock--v4.png" />
          Event
        </Section>
        <Section>
          <img src="https://img.icons8.com/color/48/000000/scroll.png" />
          Write article
        </Section>
      </Footer>
    </Wrapper>
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