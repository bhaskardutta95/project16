import React from 'react';
import Header from '../components/Header'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <div>
      <Header />
      <div style={styles.lineBreak}></div> {/* Line break */}
      <NavBar />
      {/* Rest of your content */}
    </div>
  );
};

const styles = {
  lineBreak: {
    height: '0.9px',
  },
};

export default Home;
