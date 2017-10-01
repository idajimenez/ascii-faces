import React from 'react';
import ProductItem from './ProductItem';
import styles from './styles';

const productContainer = ({products}) => (
  <div style={styles.productContainer}>
    {products.map(product => 
      <ProductItem key={product.id} product={product} />
    )}
  </div>
)

export default productContainer;