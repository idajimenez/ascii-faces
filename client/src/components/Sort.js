import React from 'react'
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react'
import { sortProductsBy } from '../redux/product/actions';
import 'semantic-ui-css/semantic.min.css';
import styles from './styles';

const sortBy = [
  { key: 'sizeAsc', text: 'Size: Small to Large', value: 'sizeAsc' },
  { key: 'sizeDesc', text: 'Size: Large to Small', value: 'sizeDesc' },
  { key: 'priceAsc', text: 'Price: Low to High', value: 'priceAsc' },
  { key: 'priceDesc', text: 'Price: High to Low', value: 'priceDesc' },
  { key: 'id', text: 'Id', value: 'id' }
];

const Sort = ({sortProductsBy}) => (
  <div style={styles.sort}>
    <Dropdown
      button
      className='icon'
      floating
      labeled
      icon='sort'
      options={sortBy}
      text='Sort By'
      onChange={(e, data) => sortProductsBy(data.value)}
    />
  </div>
)

const mapDispatchToProps = dispatch => {
  return {
		sortProductsBy: (sortBy) => dispatch(sortProductsBy(sortBy))
	}
}

export default connect(null, mapDispatchToProps)(Sort);