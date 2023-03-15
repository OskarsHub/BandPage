import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import About from "./pages/About";
import Gigs from "./pages/Gigs";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
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