import React from 'react';
import './NavbarStyles.css';
import { Link } from 'react-router-dom';
import csLogo from '../CS LOGO.png';

function Navbar() {
  return (
    <>
      <nav>
      <Link to="/">
          <img src={csLogo} alt="CS Logo" style={{ width: '50px', height: 'auto' }} />
        </Link>
        <div>
          <ul id="navbar">
            <li><Link to="/">Landing</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/grade-report">GradeReport</Link></li>
            <li><Link to="/missing-grade">MissingGradeReport</Link></li>
            <li><Link to="/instructor-contact">InstructorContact</Link></li>
            <li><Link to="/help">HelpandSupport</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
