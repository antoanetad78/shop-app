import React, { Component } from 'react';
import store from './store'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import AdsListContainer from './components/AdsListContainer'

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path='/' exact component={AdsListContainer}></Route>
        </div>
      </Provider>

    );
  }
}

export default App;
