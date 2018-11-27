import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';

import RestaurantList from './components/restaurant-list';
import AddRestaurant from './components/add-restaurant';
import Randomize from './components/randomize';
import RestaurantInfo from './components/restaurant-info';
import RestaurantCollections from './components/collection';
import CollectionList from './components/collection-list';
import { randomizeRestaurant } from './actions/restaurants';
import RandomizeCollection from './components/randomize-collection';
import YelpRestaurantSearch from './components/yelp-restaurant-search';
import YelpSearchResults from './components/yelp-search-results';

ReactDOM.render(
  <Provider store={store}>
    <div className='container'>
      <div className='restaurant-details-container'>
        <RestaurantInfo />
      </div>
      <div className='collections'>
        <RestaurantCollections />
        <CollectionList />
        <RandomizeCollection />
      </div>
      <div className='restaurants'>
        <AddRestaurant />
        <RestaurantList />
        <Randomize randomizeRestaurant={randomizeRestaurant} />
      </div>
      <div className='search-info'>
        <YelpRestaurantSearch />
        <YelpSearchResults />
      </div>
    </div>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
