import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchProductsByPage } from './redux/product/actions';
import ProductContainer from './components/ProductContainer';
import Sort from './components/Sort';
import styles from './components/styles';

class App extends Component {
  componentWillMount() {
    this.fetchProducts();
  }

  render() {
    console.log(this.props.products.length)
    const { products } = this.props;

    return (
      <div style={styles.appContainer}>
        <Sort />
        {(products.length > 0) && (
          <ProductContainer 
            fetchProducts={this.fetchProducts}
            products={this.props.products} 
            {...this.props}
          />
        )}
      </div>
    );
  }

  fetchProducts = () => {
    let pageNumber = this.props.pageNumber + 1;
    console.log('app', pageNumber)
    this.props.fetchProductsByPage(pageNumber);    
  }
}

const mapDispatchToProps = dispatch => {
  return {
		fetchProductsByPage: (pageNumber) => dispatch(fetchProductsByPage(pageNumber))
	}
}

const mapStateToProps = state => {
	return { 
    pageNumber: state.product.pageNumber,
    products: state.product.products
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
