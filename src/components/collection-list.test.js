import React from 'react'
import { shallow, mount } from 'enzyme';
import CollectionList from './collection-list';
import store from '../store';

describe('<CollectionList />', () => {
  it('Should render without crashing', () => {
    shallow(<CollectionList store={store}/>);
  });
  
});