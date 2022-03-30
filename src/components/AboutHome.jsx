import React from "react";
import styled from "styled-components";

const AboutHome = (props) => {
  let me = props.data;
  return (
    <Wrapper>
      <Header>
        <img
          src="https://www.wordwizard.co.nz/wp-content/uploads/2019/08/Default-header.png"
          alt=""
          srcset=""
          className="img-fluid"
        />
      </Header>
      <Body>
        <ProfileImg src={me.image} />
      </Body>
      <ProfileName>
        {me.name} {me.surname}
      </ProfileName>
      <ProfileTitle>{me.title}</ProfileTitle>
      <Views>
        <View>
          <p>Who viewed your profile </p>
          <span>112</span>
        </View>
        <View>
          <p>Views of your post</p>
          <span>459</span>
        </View>
      </Views>
    </Wrapper>
  );
};

export default AboutHome;

const Wrapper = styled.div`
  min-height: 10rem;
  border-radius: 6px;
  border: 1px solid #e6e6e6;
  background-color: white;
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;

`;

const Header = styled.div`
  max-height: 4rem;
  width: 100%;

  img {
    height: 4rem;
    width: 100%;
  }
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
`;

const ProfileImg = styled.img`
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
  margin-top: -2.5rem;
`;

const ProfileName = styled.p`
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 1.2rem;
  margin-bottom: 0;
`;

const ProfileTitle = styled.p`
  text-align: center;
  margin-top: 0;
  font-size: 14px;
  color: gray;
`;

const Views = styled.div`
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const View = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 14px;
    color: gray;
    margin: 0;
    margin-top: 2px;
    margin-right: auto;
  }

  span {
    font-size: 14px;
    color: #3c3cff;
    font-weight: 500;
  }
`;