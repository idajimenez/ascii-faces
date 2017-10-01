import React from 'react';
import styles from './styles';

const productContainer = ({product}) => (
  <div style={styles.faceContainer}>
    <p style={{fontSize: `${product.size}px`}}>{product.face}</p> 
  </div>
)

export default productContainer;