import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';
import userImg from './user.svg';

function Header() {
  const navLinkStyles = {
    textDecoration: 'none',
    fontSize: '14px',
  };
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Cateogories',
    },
  ];
  return (
    <nav className="headerBar">
      <h1 className="app-name">
        BookStore
      </h1>
      <ul className="navMenu">
        {links.map((link) => (
          <li
            key={link.id}
            className={styles.navItem}
            aria-hidden="true"
          >
            <NavLink to={link.path} style={navLinkStyles}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <img src={userImg} alt="User img" className="userImg" />
    </nav>
  );
}

export default Header;
