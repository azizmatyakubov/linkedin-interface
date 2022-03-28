import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MyNavbar from './components/navbar/MyNavbar';
function App() {
  



  return (
    <div className="App">
    


      <BrowserRouter>
     <MyNavbar />
     <Profile />
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
