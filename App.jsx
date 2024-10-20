// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Personal from './components/Personal';
import Events from './components/Events';
import AboutUs from './components/AboutUs';
import Todo from './components/Todo';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Todo/>

    </Router>
  );
};

export default App;
