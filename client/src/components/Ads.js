import React from 'react';
import styles from './styles';

const Ads = ({source}) => {
  let randomNumber = Math.floor(Math.random()*1000);
  let sourceUrl = source || `ads/?r=${randomNumber}`;
  return (
    <img 
      alt={randomNumber}
      style={styles.ads} 
      src={sourceUrl}
    />
  )
}

export default Ads;