import React from "react";
import styled from "styled-components";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Button } from "react-bootstrap";
const AdSectionProfile = () => {
  return (
    <Wrapper>
      <TopSection>
        <span className="mr-2">Ad</span> <BiDotsHorizontalRounded />
      </TopSection>
      <span>User, invest in your future with this exclusive offer.</span>
      <BodySection>
        <img
          src="https://likewise-stage.azureedge.net/uploads/3eb6cf23-895b-45e9-b92c-5fb1b457dd04/bill-gates-profile-pic.jpg"
          alt=""
          srcset=""
        />
        <img src="/images/linkedin.png" alt="" srcset="" />
      </BodySection>
      <div>Enjoy 50% off 2 months of Linkedin Premium! </div>
      <Button variant="outline-primary">Get 50% off today</Button>
    </Wrapper>
  );
};

export default AdSectionProfile;

const Wrapper = styled.div`
  padding: 0.5rem 1rem;
  min-height: 10rem;
  border-radius: 6px;
  margin-top: 1rem;
  border: 1px solid gray;

  text-align: center;

  span {
    font-size: 12px;
    font-weight: 400;
    color: gray;
  }

  div:last-of-type {
    font-size: 16px;
    font-weight: 400;
    color: gray;
  }

  Button {
    border-radius: 50px;
    border: 1px solid;
    margin: 1rem;
  }
`;

const TopSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  span {
    font-size: 14px;
    font-weight: 400;
  }
`;

const BodySection = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
  img {
    width: 4.5rem;
    height: 4.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  img:first-child {
    border-radius: 50px;
  }
`;
