// src/components/layout/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = ({ onCreatePostClick, isAuthenticated }) => {
  return (
  
    <div className={styles.sidebar}>
      <Link to="/" className={styles.navLink}>
        <i className="fas fa-home"></i> Home
      </Link>
      <Link to="/search" className={styles.navLink}>
        <i className="fas fa-search"></i> Search
      </Link>
      <Link to="/explore" className={styles.navLink}>
        <i className="fas fa-compass"></i> Explore
      </Link>
      <Link to="/reels" className={styles.navLink}>
        <i className="fas fa-film"></i> Reels
      </Link>
      <Link to="/messages" className={styles.navLink}>
        <i className="fas fa-envelope"></i> Messages
      </Link>
      <Link to="/notifications" className={styles.navLink}>
        <i className="fas fa-heart"></i> Notifications
      </Link>
      {/* {isAuthenticated && (
        <button onClick={onCreatePostClick} className={styles.createPostButton}>
          <i className="fas fa-plus-square"></i> Create
        </button>
      )} */}
      <Link to="/profile" className={styles.navLink}>
        <i className="fas fa-user"></i> Profile
      </Link>
    </div>
  );
};

export default Sidebar;
