import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/Login";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" elements={<LoginPage/>}/>
    </Routes>
    </BrowserRouter>
  
  )
}

export default App;
