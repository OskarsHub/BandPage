import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";

import './pages/Home.css'

import Home from "./pages/Home";
import About from "./pages/About";
import Gigs from "./pages/Gigs";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route exact path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/gigs' element={<Gigs/>}/>
        <Route path='/adminPage' element={<Admin/>} />
      </Routes>
    </Router>
  );
}

export default App;