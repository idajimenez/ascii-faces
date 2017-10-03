import React from 'react';
import styles from './styles';

const productContainer = ({product, color}) => (
  <div style={{...styles.faceContainer, backgroundColor: color}}>
    <p style={{fontSize: `${product.size}px`}}>{product.face}</p> 
  </div>
)

export default productContainer;