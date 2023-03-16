import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './pages/Home.css'

import Home from "./pages/Home";
import About from "./pages/About";
import Gigs from "./pages/Gigs";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route exact path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/gigs' element={<Gigs/>}/>
      </Routes>
    </Router>
  );
}

export default App;