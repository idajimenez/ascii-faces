import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchProductsByPage } from './redux/product/actions';
import ProductContainer from './components/ProductContainer';
import styles from './components/styles';

class App extends Component {
  componentWillMount() {
    this.props.fetchProductsByPage();
  }

  render() {
    console.log(this.props.products)
    const { products } = this.props;
    return (
      <div style={styles.appContainer}>
        {(products.length > 0) && <ProductContainer products={products} />}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
		fetchProductsByPage: () => dispatch(fetchProductsByPage())
	}
}

const mapStateToProps = state => {
	return { 
    products: state.product.products
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
