import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MyNavbar from './components/navbar/MyNavbar';
import MyFooter from "./components/footer/MyFooter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <Profile />
        <Routes>
          <Route path="/home/:id" element={<Profile />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
