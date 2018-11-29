import React from 'react'
import { shallow, mount } from 'enzyme';
import AddRestaurant from './add-restaurant';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// import fetchMock from 'fetch-mock';
import * as collectionActions from '../actions/collection';
import * as restaurantActions from '../actions/restaurants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let store = mockStore({
    restaurant: {
      restaurants: [],
      loading: false,
      error: null,
      winningRestaurant: '',
      currentRestaurantId: '',
      currentCollectionName: 'Select Restaurant',
      yelpSearchResults: [{searchResult: [], createdAt: '', updatedAt: '', id: ''}],
    },
    collection: {
      collections: [],
      loading: false,
      error: null,
      winningCollection: '',
      currentCollectionId: 0,
      currentCollectionName: 'Select Collection',
    }
});

describe('<AddRestaurant />', () => {
  it('Should render without crashing', () => {
    shallow(<AddRestaurant store={store}/>);
  });

  it('Should display correct h2 and p when no collection is selected', () => {
    const wrapper = mount(<AddRestaurant store={store}/>);
    // console.log(wrapper);
    const h2 = wrapper.find('.restaurant-h2');
    const p = wrapper.find('p');

    expect(h2.text()).toEqual('Select a collection!');
    expect(p.text()).toEqual('Select a collection you want to update on the left before you can add restaurants with the Yelp search to the right!');
  })

  // it('Should display correct h2 and p when there are no restaurants in a collection', () => {
  //   const wrapper = mount(<AddRestaurant store={store}/>);
  //   // store = store.getState();
  //   // console.log(wrapper);
  //   // console.log('BEFORE', store.getState().collection);

  //   // store.dispatch(collectionActions.setCollectionIdState(1))
  //   // store.dispatch(collectionActions.setCollectionNameState('TEST NAME'))
    
  //   //     console.log(wrapper);
  //   console.log('test')
  //   console.error(store.getState().collection.currentCollectionId);
  //   console.log('AFTER', store.getState().collection.currentCollectionId);
  //   const h2 = wrapper.find('.restaurant-h2');
  //   const p = wrapper.find('p');
  //   expect(h2.text()).toEqual('TEST NAME');
  //   expect(p.text()).toEqual(`Add restaurants to a collection by using the 'Search for a restaurant' field. Your search will return results where you can choose to 'Add' restaurants to a collection.`);
  // })
});