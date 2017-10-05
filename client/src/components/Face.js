import React from 'react';
import styles from './styles';

const face = ({product, color}) => (
  <div style={{...styles.faceContainer, backgroundColor: color}}>
    <p style={{fontSize: `${product.size}px`, padding: '10px'}}>{product.face}</p> 
  </div>
)

export default face;