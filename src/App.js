import './App.css';
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import FacilityNew from "./pages/FacilityNew";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/login" element ={<LoginPage/>}/>
          <Route path="/facility/new" element ={<FacilityNew/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
