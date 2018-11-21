import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

// import combineReducers from './reducers/reducers';
// import restaurantsReducer from './reducers/restaurants';
// import collectionsReducer from './reducers/collections';
import store from './store';

import RestaurantList from './components/restaurant-list';
import AddRestaurant from './components/add-restaurant';
import Randomize from './components/randomize';
import RestaurantInfo from './components/restaurant-info';
import RestaurantCollections from './components/collection';
import CollectionList from './components/collection-list';
import {randomizeRestaurant} from './actions/restaurants';
// import {randomizeCollection} from './actions/collection';
import RandomizeCollection from './components/randomize-collection';

// const store = createStore(combineReducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <div>
      <RestaurantCollections />
      <CollectionList />
      <RandomizeCollection />
      <AddRestaurant />
      <RestaurantList />
      <Randomize randomizeRestaurant={randomizeRestaurant}/>
      <RestaurantInfo />
    </div>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
