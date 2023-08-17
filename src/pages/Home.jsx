import React from 'react';
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import ImageGrid from '../components/ImageGrid';

const Home = () => {
  return (
    <div>
      <Header />
      <div style={styles.lineBreak}></div>
      <NavBar />
      <div style={styles.secondLineBreak}></div>
      <ImageGrid />
    </div>
  );
};

const styles = {
  lineBreak: {
    height: '0.9px',
  },
  secondLineBreak:{
    height: '10px',
  },
};

export default Home;
