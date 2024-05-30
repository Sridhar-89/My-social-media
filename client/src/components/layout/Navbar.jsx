// src/components/layout/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = ({ onCreatePostClick, isAuthenticated, onLogout }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" className={styles.navLink}>My Social Media</Link>
      </div>
      <div className={styles.navItems}>
        {isAuthenticated ? (
          <>
            <button onClick={onCreatePostClick} className={styles.createPostButton}>
              Create Post
            </button>
            <button onClick={onLogout} className={styles.logoutButton}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className={styles.navLink}>Login</Link>
            <Link to="/signup" className={styles.navLink}>Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
