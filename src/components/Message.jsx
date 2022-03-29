import React from "react";
import styled from "styled-components";

const Message = () => {
  return (
    <Wrapper>
      <Header>
        <img
          src="https://likewise-stage.azureedge.net/uploads/3eb6cf23-895b-45e9-b92c-5fb1b457dd04/bill-gates-profile-pic.jpg"
          alt="profile-avatar"
        />
        <div>
          <h6>Bill Gates</h6>
          <p>Software engineer</p>
          <p>19 mins ago</p>
        </div>
      </Header>
      <Body>
        <p>
          Career switching isn't a new concept. It's been happening forever.
          Darryl from The Office left his warehouse job and went to Athlead. Jim
          left his sales job and went to Athlead. Chandler Bing left his boring
          job and became an intern doing whatever it was he die.
        </p>

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
  );
};

export default Message;

const Wrapper = styled.div`
  background-color: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  width: 100%;
  min-height: 5rem;
  padding: 1rem 1rem;
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
