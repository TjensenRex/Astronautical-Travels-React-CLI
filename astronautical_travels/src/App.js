import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import AboutUs from "./pages/AboutUs";
import Booking from "./pages/Booking";
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  
  return (
    <div className="App">
      
      <BrowserRouter basename="/Astronautical-Travels-React-CLI/astronautical_travels/build">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="Booking" element={<Booking />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}
//root.render(<p>THIS WAS RENDERED</p>);
export default App;


