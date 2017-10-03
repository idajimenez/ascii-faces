import React from 'react';
import Face from './Face';
import styles from './styles';
import { toCents, toDate } from '../utils/helpers';

class ProductItem extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div style={styles.productItem}>
        <Face product={product} {...this.props} />
        <div style={styles.sizePriceContainer}>
          <p>Size: {product.size}</p>
          <p style={styles.price}>{toCents(product.price)}</p>
        </div>
        <p style={styles.date}>{toDate(product.date)}</p>
      </div>
    )
  }
}

export default ProductItem;