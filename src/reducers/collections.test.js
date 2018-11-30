import reducer from './collections';
import { fetchCollectionsRequest, fetchCollectionsSuccess, fetchCollectionsError, addCollection, randomizeCollection, deleteCollectionSuccess, setCollectionIdState, setCollectionNameState } from '../actions/collection';

describe('reducer', () => {
  it('Should handle the fetch collections request action', () => {
    const state = {
      loading: true,
      error: null,
    };
    const action = fetchCollectionsRequest();
    const newState = reducer(state, action);
    expect(newState).toEqual({
      loading: true,
      error: null,
    });
  });

  it('Should handle the fetch collections success action', () => {
    const state = {
      loading: false,
      error: null,
      collections: 'test',
    };
    const action = fetchCollectionsSuccess('collections');
    const newState = reducer(state, action);
    expect(newState).toEqual({
      loading: false,
      error: null,
      collections: 'collections',
    });
  });

  it('Should handle the fetch collections error action', () => {
    const state = {
      loading: false,
      error: 'test',
    };
    const action = fetchCollectionsError('error');
    const newState = reducer(state, action);
    expect(newState).toEqual({
      loading: false,
      error: 'error',
    });
  });
  
  it('Should handle the add collection action', () => {
    const state = {
      collections: ['1', '2'],
    };
    const action = addCollection('3');
    const newState = reducer(state, action);
    expect(newState).toEqual({
      collections: ['1', '2', '3'],
    });
  });

  it('Should handle the randomize collection action', () => {
    const state = {
      collections: ['1', '2'],
      winningCollection: 'test',
    };
    const action = randomizeCollection('test');
    const newState = reducer(state, action);
    expect(newState).toEqual({
      collections: ['1', '2'],
      winningCollection: 'You are eating at a restaurant from the test collection tonight!',
    });
  });

  it('Should handle the delete collection success action', () => {
    const state = {
      collections: ['1'],
    };
    const action = deleteCollectionSuccess('1')
    const newState = reducer(state, action);
    expect(newState).toEqual({
      collections: [],
    });
  });

  it('Should handle the set collection id state action', () => {
    const state = {
      currentCollectionId: 'test',
      loading: true,
      error: null
    }
    const action = setCollectionIdState('testId');
    const newState = reducer(state, action);
    expect(newState).toEqual({
      currentCollectionId: 'testId',
      loading: true,
      error: null
    });
  });

  it('Should handle the set collection name state action', () => {
    const state = {
      currentCollectionName: 'test',
      loading: true,
      error: null,
    }
    const action = setCollectionNameState('testName');
    const newState = reducer(state, action);
    expect(newState).toEqual({
      currentCollectionName: 'testName',
      loading: true,
      error: null,
    });
  });

  it('Should set the initial state when nothing is passed in', () => {
    const state = undefined;
    const action = {
      type: '@@UKNOWN',
    };
    const newState = reducer(state, action);
    expect(newState).toEqual({
      collections: [],
      loading: false,
      error: null,
      winningCollection: '',
      currentCollectionId: 0,
      currentCollectionName: 'Select Collection',
    });
  });
});