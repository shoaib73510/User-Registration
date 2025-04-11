import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="#">
        <img
          src="https://th.bing.com/th/id/R.95613cea64df72eb46cd54c658ee1866?rik=SGZbuPmhNTb38g&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2014%2f09%2fApple-logo-images.png&ehk=iGehTJy9g14dfX6qUPV2EXfKFp%2fbfit%2be7jrmE7m8%2bY%3d&risl=&pid=ImgRaw&r=0"
          width="30"
          height="30"
          alt="Logo"
        />
      </a>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/view">View</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
