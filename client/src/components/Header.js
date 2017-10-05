import React from 'react';
import Ads from './Ads';
import styles from './styles';

const header = () => (
  <div style={styles.header}>
    <h1>Products Grid</h1>

    <p>Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.</p>

    <p>But first, a word from our sponsors:</p> 
    <Ads />
  </div>
)

export default header;