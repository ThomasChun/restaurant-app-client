import React from 'react'
import { shallow, mount } from 'enzyme';
import RestaurantInfo from './collection';
import store from '../store';

describe('<RestaurantInfo />', () => {
  it('Should render without crashing', () => {
    shallow(<RestaurantInfo store={store}/>);
  });
  
});