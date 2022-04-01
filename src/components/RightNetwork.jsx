import React from "react";
import styled from "styled-components";
import "./RightNetwork.css";

const RightNetwork = () => {
  return (
    <Wrapper>
      <FirstWrapper>
        <Header>
          <div>
            <h3 className="ml-2">Invitations</h3>
          </div>
          <div>
            <h3>Manage</h3>
          </div>
        </Header>
        <Body>
          <div className="d-flex">
            <img
              src="/images/aminface.png"
              alt="avatar"
              className="mt-2 ml-3"
            />
            <div className="network-header">
              <h4 className="nettop d-block">Umud Valizada</h4>
              <p className="network-infos d-block">
                Chief Executive Officer and Co-Founder at OnFuture Consultancy
              </p>
              <p className="network d-block">Emin Alizada and 46 others</p>
            </div>
          </div>
        </Body>
      </FirstWrapper>
      <SecondWrapper>
        <Headers>
          <div>
            <h3>Industry Leader in Polad you may know</h3>
          </div>
          <div>
            <h3>See all</h3>
          </div>
        </Headers>
        <SecondBody>
          <div>
            <div className="network-image"></div>
          </div>
        </SecondBody>
      </SecondWrapper>
    </Wrapper>
  );
};

export default RightNetwork;

const Wrapper = styled.div`
  min-height: 100vh;
`;

const FirstWrapper = styled.h1`
  background-color: blue;
  height: 20vh;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  background-color: white;
  padding: 10px 10px 10px 10px;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
`;

const SecondWrapper = styled.div`
  min-height: 80vh;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  background-color: white;
  padding: 10px 10px 10px 10px;
  border-radius: 8px;
  overflow: hidden;
  margin: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  h3 {
    font-size: 16px;
  }
`;

const Body = styled.div`
  background-color: rgb(226, 240, 254);
  width: 100%;
  height: 100px;
  padding: auto;
  img {
    border-radius: 50%;
    width: 68px;
    height: 68px;
  }
`;

const Headers = styled.div`
  display: flex;
  justify-content: space-between;
  h3 {
    font-size: 16px;
  }
`;

const SecondBody = styled.div`
  background-color: yellow;
`;
