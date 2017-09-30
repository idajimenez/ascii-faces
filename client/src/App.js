import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProductsByPage } from './redux/product/actions';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.fetchProductsByPage();
  }
  render() {
    console.log(this.props.products)
    return (
      <div className="App">
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
