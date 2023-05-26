import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="header-container row">
        <span className="logo">
          <img src="./logo-traveler.png" alt="" />
          {' '}
          <span>Space Travelers Hub</span>
        </span>
        <nav>
          <ul className="nav-list">
            <li className="nav-list-item">
              <NavLink
                to="/"
                className={(link) => (link.isActive ? 'active-link' : '')}
              >
                Rockets
              </NavLink>
            </li>
            <li className="nav-list-item">
              <NavLink
                to="/missions"
                className={(link) => (link.isActive ? 'active-link' : '')}
              >
                Missions
              </NavLink>
            </li>
            <li className="nav-list-item">
              <NavLink
                to="/my-profile"
                className={(link) => (link.isActive ? 'active-link' : '')}
              >
                My Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
