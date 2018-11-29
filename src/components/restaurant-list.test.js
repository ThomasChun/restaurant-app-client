import React from 'react'
import { shallow, mount } from 'enzyme';
import RestaurantList from './collection';
import store from '../store';

describe('<RestaurantList />', () => {
  it('Should render without crashing', () => {
    shallow(<RestaurantList store={store}/>);
  });
  
});