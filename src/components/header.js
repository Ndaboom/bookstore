import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';

function Header() {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
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
    <header style={headerStyle}>
      <h1>
        BookStore
      </h1>
      <ul className={styles.navigationMenu}>
        {links.map((link) => (
          <li
            key={link.id}
            className={styles.navItem}
            aria-hidden="true"
          >
            <NavLink to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
