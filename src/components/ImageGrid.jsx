import React from 'react';
import batman_banner from '../assets/images/banners/batman_banner.JPG'

const ImageGrid = () => {
  const images = [
    { src: batman_banner, alt: 'Image 2'},
    { src: batman_banner, alt: 'Image 2'},
    { src: batman_banner, alt: 'Image 3'},
    { src: batman_banner, alt: 'Image 4'},
    { src: batman_banner, alt: 'Image 3'},
    { src: batman_banner, alt: 'Image 3'}
  ];

  return (
    <div style={styles.container}>
    <div style={styles.imageGrid}>
      {images.map((image, index) => (
        <a key={index} href="#" onClick={(e) => e.preventDefault()} >
          <img src={image.src} alt={image.alt} style={styles.batmanImage}/>
        </a>
      ))}
    </div>
    </div>
  );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        minHeight: '30vh', // Set a minimum viewport height
        padding: '0 20px',
    },

  imageGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 300px)', // Adjust the number of columns as needed
    gap: '1px', // Adjust the gap between images
  },
  batmanImage:{
    width: '100%',
    height: 'auto',
    cursor: 'pointer',
  },
  VerticalImage:{
    width: '100%',
    height: 'auto',
    cursor: 'pointer',
  },
};

export default ImageGrid;
