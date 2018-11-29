import React from 'react'
import { shallow, mount } from 'enzyme';
import YelpSearchResults from './collection';
import store from '../store';

describe('<YelpSearchResults />', () => {
  it('Should render without crashing', () => {
    shallow(<YelpSearchResults store={store}/>);
  });
  
});