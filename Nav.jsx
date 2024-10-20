// src/Nav.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Nav.css';

const Nav = () => {
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');

  function handleChanges(cat, loc) {
    setCategory(cat);
    setLocation(loc);
  }

  return (
    <div className='navbar'>
      <div className="nav-items">
        <Link to="/"><h2>Home</h2></Link>
        <Link to="/personal"><h2>Personal</h2></Link>
        <Link to="/events"><h2>Events</h2></Link>
        <Link to="/about"><h2>About Us</h2></Link>
      </div>

      <div className="nav-inputs">
        <input
          type="text"
          placeholder='Enter category'
          value={category}
          className='SLinput'
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder='Enter Location'
          value={location}
          className='SLinput'
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={() => handleChanges(category, location)}>Search</button>
      </div>

      <div className="profile">
        <img src="path/to/profile.jpg" alt="Profile" className="profile-pic" />
        <span className="profile-name">John Doe</span>
      </div>
    </div>
  );
};

export default Nav;
