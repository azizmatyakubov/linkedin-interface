import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MyNavbar from './components/navbar/MyNavbar';
import MyFooter from "./components/footer/MyFooter";
import Home from "./components/Home";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function App() {
  const [profile, setProfile] = useState([]);
  // get the id from the url
  const param = useParams();

  // it is like componetDidMount
  useEffect(() => {
    fetchApi();
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

  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/profile" element={<Profile data={profile} />} />
          <Route path="/feed/" element={<Home data={profile} />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
