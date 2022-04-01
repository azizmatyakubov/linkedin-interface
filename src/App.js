import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './pages/Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MyNavbar from './components/navbar/MyNavbar';
import MyFooter from "./components/footer/MyFooter";
import Home from "./pages/Home";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";


function App() {
  const [profile, setProfile] = useState([]);
  const [myProfile, setMyProfile] = useState({})

  // it is like componetDidMount
  useEffect(() => {
    fetchApi(); 
    fetchMyProfile() 
  }, []);

  // Get people from API and assign to state
  const fetchApi = async () => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMTMxZWQzMzk4NDAwMTVjODgzYmIiLCJpYXQiOjE2NDg0OTc0MzgsImV4cCI6MTY0OTcwNzAzOH0.sLkbyZFjVCiLvfgrcA9MnJiefoO2BW2iMooxrirJlnU",
        },
      }
    );
    const data = await response.json();
    setProfile(data);
  };

  const fetchMyProfile = async () => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/me",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMTMxZWQzMzk4NDAwMTVjODgzYmIiLCJpYXQiOjE2NDg0OTc0MzgsImV4cCI6MTY0OTcwNzAzOH0.sLkbyZFjVCiLvfgrcA9MnJiefoO2BW2iMooxrirJlnU",
        },
      }
    );
    const data = await response.json();
    setMyProfile(data);
    // this is the data that we get from the api
  };




  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route
            path="/profile/"
            element={<Profile data={profile} me={myProfile} />}
          />
          <Route
            path="/profile/:id"
            element={<Profile data={profile} />}
          />

          <Route path="/" element={<Home data={profile} me={myProfile}/>} />
          <Route
            path="/post/:id"
            element={<Home data={profile} />}
          />

          
         

        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
