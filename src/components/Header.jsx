import React from 'react';
import menu_icon_png from '../assets/images/icon_menu_white.png'

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.menuIcon}>
        <img src = {menu_icon_png} alt="Menu" style={styles.menuIcon}/>
        <i className="fas fa-bars"></i>
      </div>
      <div style={styles.companyName}>
        Company Name
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '60px',
    position: 'relative', // Added to position the menu icon
  },
  menuIcon: {
    position: 'absolute',
    left: '10px',
    top: '50%',
    transform: 'translateY(-50%)', // Center vertically
    fontSize: '20px',
    cursor: 'pointer',
  },
  companyName: {
    fontSize: '24px',
  },
};

export default Header;
