import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

// const Navbar = () => {
// return (
// <nav className="navbar">
// <img src={'https://file.rendit.io/n/t7ukMEwiuBjHvVBm3i1U.png'} />
// <div className="nav-links">
// <a href="#" className="nav-link">
// <img src={'https://file.rendit.io/n/WHspRKcdQh30KDPZ0vgT.svg'} />
// Home
// </a>
// <a href="#" className="nav-link">
// <img src={'https://file.rendit.io/n/224j0FntCCS7htSHVPDN.svg'} />
// Food Log
// </a>
// <a href="#" className="nav-link">
// <img src={'https://file.rendit.io/n/4oakW9TtSWEhTm4JNXuR.svg'} />
// Healthspace
// </a>
// <a href="#" className="nav-link">
// <img src={'https://file.rendit.io/n/UaoW1FXM928q5r9n1NkB.svg'} />
// Settings
// </a>
// </div>
// </nav>
// );
// };

// NOTE NOTE NOTE
// Use code below to link pages. 
//Comment out const Navbar above and uncomment below when adding links to the respective pages
//.............................................................//

const Navbar = () => {
  return (
  
  <nav className="navbar">
  <img src={'https://file.rendit.io/n/t7ukMEwiuBjHvVBm3i1U.png'} alt="bakuli-logo" />
  <div className="nav-links">
  <Link to="/dashboard/home" className="nav-link">
  <img src={'https://file.rendit.io/n/WHspRKcdQh30KDPZ0vgT.svg'} alt="home-logo" />
  Home
  </Link>
  <Link to="/dashboard/food-log" className="nav-link">
  <img src={'https://file.rendit.io/n/224j0FntCCS7htSHVPDN.svg'} alt="food-log-logo" />
  Food Log
  </Link>
  <Link to="/dashboard/healthspace" className="nav-link">
  <img src={'https://file.rendit.io/n/4oakW9TtSWEhTm4JNXuR.svg'} alt="healthspace-logo" />
  Healthspace
  </Link>
  <Link to="/dashboard/settings" className="nav-link">
  <img src={'https://file.rendit.io/n/UaoW1FXM928q5r9n1NkB.svg'} alt="settings-logo" />
  Settings
  </Link>
  </div>
  </nav>
  );
  }

export default Navbar;



