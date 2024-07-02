import './App.css';
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import FacilityNew from "./pages/FacilityNew";
import ContractorNew from "./pages/ContractorNew";
import BidNew from "./pages/BidNew";
import ProjectNew from "./pages/ProjectNew";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/login" element ={<LoginPage/>}/>
          <Route path="/facility/new" element ={<FacilityNew/>}/>
          <Route path="/contractor/new" element ={<ContractorNew/>}/>
          <Route path="/bid/new" element ={<BidNew/>}/>
          <Route path="/project/new" element ={<ProjectNew/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
