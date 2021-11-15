
//import { Routes, Route, Navigate } from "react-router-dom";

import './App.css';
import CountriesList from "./components/CountriesList";
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
   <div>
        <CountriesList/>
   </div>
   <div>
     <CountryDetails/>
   </div>
    </div>
  );
}

export default App;
