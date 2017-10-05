import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react'
import './App.css';
import Header from './components/Header';
import ProductContainer from './components/ProductContainer';
import Sort from './components/Sort';
import styles from './components/styles';

class App extends Component {
  render() {
    return (
      <div style={styles.appContainer}>
        <Header />

        <Divider />
          <Sort />
        <Divider />

        <ProductContainer />
      </div>
    );
  }
}

export default App;
