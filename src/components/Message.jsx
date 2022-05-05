import React from "react";
import styled from "styled-components";
import SingleMessage from "./SingleMessage";

const Message = (props) => {
  return (
    <div>
      {props.skeleton && (
        <>
          <Wrapper>
            <Header>
              <span
                className="skeleton-profile-pic skeleton mr-4"
                alt="skeleton"
              />
              <div>
                <h6 className="skeleton-name skeleton"> </h6>
                <p className="skeleton-text skeleton"></p>
              </div>
            </Header>
            <Body>
              <p className="skeleton-text mb-2 skeleton"></p>
              <p className="skeleton-text mb-2 skeleton"></p>
              <p className="skeleton-text mb-2 skeleton"></p>

              <div>
                <img
                  className="skeleton skeleton-text mr-2"
                  alt="skeleton-text"
                />
                <p className="skeleton skeleton-text ml-2 mr-2"></p>
                <p className="skeleton skeleton-text"></p>
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
          <Wrapper>
            <Header>
              <span
                className="skeleton-profile-pic skeleton mr-4"
                alt="skeleton"
              />
              <div>
                <h6 className="skeleton-name skeleton"> </h6>
                <p className="skeleton-text skeleton"></p>
              </div>
            </Header>
            <Body>
              <p className="skeleton-text mb-2 skeleton"></p>
              <p className="skeleton-text mb-2 skeleton"></p>
              <p className="skeleton-text mb-2 skeleton"></p>

              <div>
                <img
                  className="skeleton skeleton-text mr-2"
                  alt="skeleton-body"
                />
                <p className="skeleton skeleton-text ml-2 mr-2"></p>
                <p className="skeleton skeleton-text"></p>
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
        </>
      )}
      {props.data
        .slice(-12) // only showing last 5 posts
        .reverse() // last messages should be on top
        .map((post) => (
          <>
            <SingleMessage getPosts={props.getPosts} post={post} />
          </>
        ))}
    </div>
  );
};

export default Message;

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
