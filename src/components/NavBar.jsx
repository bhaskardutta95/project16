import React from 'react';

const NavBar = () => {
  return (
    <nav style={styles.navBar}>
      <a href="#" style={styles.navLink}>Link 1</a>
      <a href="#" style={styles.navLink}>Link 2</a>
      <a href="#" style={styles.navLink}>Link 3</a>
      <a href="#" style={styles.navLink}>Link 4</a>
      <a href="#" style={styles.navLink}>Link 5</a>
    </nav>
  );
};

const styles = {
  navBar: {
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    padding: '10px 0',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '16px',
  },
};

export default NavBar;
