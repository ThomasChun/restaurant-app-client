import React from 'react'
import { shallow, mount } from 'enzyme';
import Randomize from './collection';
import store from '../store';

describe('<Randomize />', () => {
  it('Should render without crashing', () => {
    shallow(<Randomize store={store}/>);
  });
  
});