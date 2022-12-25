import React from 'react';
import logo from '../logo.png';

const Navbar = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">
    <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo" /></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item active">
          <a className="nav-link" href="#">Company </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="#">Hire Developers</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Solutions
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact us</a>
        </li>

      </ul>
      <form class="d-flex" role="search">
        <button class="btn btn-outline-warning" type="submit">REQUEST A</button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar