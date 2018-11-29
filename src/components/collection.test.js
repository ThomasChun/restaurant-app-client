import React from 'react'
import { shallow, mount } from 'enzyme';
import RestaurantCollections from './collection';
import store from '../store';

describe('<RestaurantCollections />', () => {
  it('Should render without crashing', () => {
    shallow(<RestaurantCollections store={store}/>);
  });
  
});