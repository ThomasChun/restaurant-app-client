import React from 'react'
import { shallow, mount } from 'enzyme';
import YelpRestaurantSearch from './collection';
import store from '../store';

describe('<YelpRestaurantSearch />', () => {
  it('Should render without crashing', () => {
    shallow(<YelpRestaurantSearch store={store}/>);
  });
  
});