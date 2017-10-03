import React from 'react';
import { connect } from 'react-redux';
import { fetchProductsByPage } from '../redux/product/actions';
// import InfiniteScroll from 'react-infinite-scroller';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductItem from './ProductItem';
import styles from './styles';
const colors = ['#9bc95b', '#ffd47b', '#95a9d6', '#ffa8e1'];

class ProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      products: this.props.products
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.products.length !== this.state.products.length) {
      console.log('CHANGED')
      this.setState({ products: this.props.products });
    }
  }

  render() {
    return (
      <InfiniteScroll
        pullDownToRefresh
        pullDownToRefreshContent={
          <h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
          <h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>
        }
        refreshFunction={() => console.log('refresh')}
        next={this.fetchProducts.bind(this)}
        hasMore={true}
        loader={<div style={{display: 'block'}}><h4>Loading...</h4></div>}
        endMessage={
          <p style={{textAlign: 'center'}}>
            <b>~ end of catalogue ~</b>
          </p>
        }
        
      >
        <div style={styles.productContainer}>
          {this.state.products.map((product, i) => 
            <ProductItem key={product.id} product={product} color={colors[i % 4]}/>
          )}
        </div>
      </InfiniteScroll>
    );
  }

  fetchProducts() {
    let pageNumber = this.props.pageNumber + 1;
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);