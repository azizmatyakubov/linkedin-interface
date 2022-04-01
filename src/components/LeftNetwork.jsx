import React from "react";
import styled from "styled-components";

const LeftNetwork = () => {
  return (
    <Wrapper>
      <Body>
        <h2>Manage my network</h2>
        <MainDiv>
          <DivWrapper className="mb-0">
            <div>
              <img
                src="https://www.svgrepo.com/show/305294/people.svg"
                width="25"
                height="25"
                alt="connection"
              />
              <span className="ml-2 mt-3">Connection</span>
            </div>
            <div>
              <p>841</p>
            </div>
          </DivWrapper>
          <CWrapper className="mb-3">
            <div>
              <img
                src="https://www.svgrepo.com/show/343062/contacts.svg"
                width="28"
                height="28"
                alt="contacts"
              />
              <span className="ml-2">Contact</span>
            </div>
          </CWrapper>
          <PWrapper>
            <div>
              <img
                src="https://www.svgrepo.com/show/381914/avatar-people-user.svg"
                width="28"
                height="28"
                alt="people"
              />
              <span className="ml-2">People | Follow</span>
            </div>
            <div>
              <p>39</p>
            </div>
          </PWrapper>
          <GWrapper className="mb-3">
            <div>
              <img
                src="https://www.svgrepo.com/show/374902/groups.svg"
                width="28"
                height="28"
                alt="groups"
              />
              <span className="ml-2">Groups</span>
            </div>
          </GWrapper>
          <EWrapper>
            <div>
              <img
                src="https://www.svgrepo.com/show/133706/events-calendar.svg"
                width="23"
                height="23"
                alt="events"
              />
              <span className="ml-3">Event</span>
            </div>
            <div>
              <p>1</p>
            </div>
          </EWrapper>
          <PaWrapper>
            <div>
              <img
                src="https://www.svgrepo.com/show/347249/pages.svg"
                width="25"
                height="25"
                alt="pages"
              />
              <span className="ml-3">Pages</span>
            </div>
            <div>
              <p>21</p>
            </div>
          </PaWrapper>
          <NWrapper className="mb-3">
            <div>
              <img
                src="https://www.svgrepo.com/show/353218/newsletter.svg"
                width="23"
                height="23"
                alt="newsletter"
              />
              <span className="ml-3">Newsletters</span>
            </div>
          </NWrapper>
          <HaWrapper>
            <div>
              <img
                src="https://www.svgrepo.com/show/42960/hashtag.svg"
                width="20"
                height="20"
                color="gray"
                alt="hashtag"
              />
              <span className="ml-3">Hashtag</span>
            </div>
            <div>
              <p>1</p>
            </div>
          </HaWrapper>
        </MainDiv>
        <ShowDiv>
          <p>Show less</p>
          <span className="ml-3">
            <img
              src="https://www.svgrepo.com/show/392635/arrow-chevron-large-top-direction-navigation.svg"
              alt=""
            />
          </span>
        </ShowDiv>
      </Body>
    </Wrapper>
  );
};

export default LeftNetwork;

const Wrapper = styled.div`
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  background-color: white;
  padding: 10px 10px 10px 10px;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
`;

const MainDiv = styled.div`
  margin: 20px 20px
  padding-left: 10px;
  padding-right: 10px; ;
`;

const Body = styled.div`
  background-color: white;
  margin-top: 50px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 20px;
  h2 {
    color: gray;

    font-size: 20px;
    line-height: 24px;
  }
`;

const DivWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: gray;
`;

const CWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: gray;
`;

const PWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: gray;
`;
const GWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: gray;
`;
const EWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: gray;
`;
const PaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: gray;
`;
const NWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: gray;
`;
const HaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: gray;
`;

const ShowDiv = styled.div`
  display: inline-flex;
  font-size: 18px;
  color: gray;
`;
