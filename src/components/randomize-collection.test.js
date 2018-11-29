import React from 'react'
import { shallow, mount } from 'enzyme';
import RandomizeCollection from './collection';
import store from '../store';

describe('<RandomizeCollection />', () => {
  it('Should render without crashing', () => {
    shallow(<RandomizeCollection store={store}/>);
  });
  
});