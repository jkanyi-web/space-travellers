import React from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  {
    path: '/',
    label: 'Rockets',
  },
  {
    path: '/missions',
    label: 'Missions',
  },
  {
    path: '/my-profile',
    label: 'My Profile',
  },
];

const Header = () => (
  <header>
    <div className="header-container row">
      <span className="logo">
        <img src="./logo-traveler.png" alt="Logo" />
        <span>Space Travelers Hub</span>
      </span>
      <nav>
        <ul className="nav-list">
          {navLinks.map(({ path, label }) => (
            <li className="nav-list-item" key={path}>
              <NavLink
                exact
                to={path}
                className={(link) => (link.isActive ? "active-link" : "")}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
