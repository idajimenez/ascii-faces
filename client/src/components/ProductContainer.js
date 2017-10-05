import React from 'react';
import { connect } from 'react-redux';
import { fetchProductsByPage, sortProductsBy } from '../redux/product/actions';
import Ads from './Ads';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductItem from './ProductItem';
import Spinner from 'react-spinkit';
import styles from './styles';
const colors = ['#9bc95b', '#ffd47b', '#95a9d6', '#ffa8e1'];

class ProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      products: this.props.products
    }
  }

  componentWillMount() {
    this.fetchProducts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(this.props.products) !== JSON.stringify(this.state.products)) {
      this.setState({ products: this.props.products });
    }
  }

  render() {
    return (
      <InfiniteScroll
        next={this.fetchProducts.bind(this)}
        hasMore={!this.props.isLoadedAllProducts}
        loader={
          <div style={styles.loader}>
            <Spinner name="ball-beat" />
          </div>
        }
        endMessage={
          <p style={styles.loader}>
            <b>~ end of catalogue ~</b>
          </p>
        }
        scrollThreshold={0.7}
      >
        <div style={styles.productContainer}>
          {this.props.isSortChanged ?
            null :
            this.state.products.map((product, i) => {
              return product.hasOwnProperty('source') ?
                <div key={`${product.id}i`} style={styles.innerAdsContainer}>
                  <Ads source={product.source} />
                </div>
                : <ProductItem key={`${product.id}i`} product={product} color={colors[i % 4]}/>
          })}
        </div>
      </InfiniteScroll>
    );
  }

  fetchProducts() {
    let pageNumber = this.props.pageNumber + 1;

    if (this.props.sortBy) {
      this.props.sortProductsBy(this.props.sortBy, pageNumber);
    } else {
      this.props.fetchProductsByPage(pageNumber);    
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProductsByPage: (pageNumber) => dispatch(fetchProductsByPage(pageNumber)),
    sortProductsBy: (sortBy, pageNumber) => dispatch(sortProductsBy(sortBy, pageNumber))    
	}
}

const mapStateToProps = state => {
	return { 
    isLoadedAllProducts: state.product.isLoadedAllProducts,
    isSortChanged: state.product.isSortChanged,
    pageNumber: state.product.pageNumber,
    products: state.product.products,
    sortBy: state.product.sortBy    
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);