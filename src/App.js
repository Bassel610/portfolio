import './App.css';
import './responsive.css'
import HomePage from './Componand/HomePadge/HomePadge';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import AboutMe from "./Componand/AnoterPages/AboutMe" ;
import MyWork from "./Componand/AnoterPages/MyWork";
import MyCv from  "./Componand/AnoterPages/MyCv";
import ContactMe from "./Componand/AnoterPages/ContctMe"
import ViewProject from './Componand/AnoterPages/ViewProject';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/AoutMe' element={<AboutMe/>} />
      <Route path='/MyCv' element={<MyWork/>} />
      <Route path='/MyWork' element={<MyCv/>} />
      <Route path='/ContctMe' element={<ContactMe/>} />
      <Route path='/Lena/:ProjectId' element={<ViewProject/>} />
    </Routes>
    </div>
  );
}

export default App;
