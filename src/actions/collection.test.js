import {
  FETCH_COLLECTIONS_REQUEST,
  fetchCollectionsRequest,
  fetchCollectionsSuccess,
  FETCH_COLLECTIONS_SUCCESS,
  fetchCollectionsError,
  FETCH_COLLECTIONS_ERROR,
  addCollection,
  ADD_COLLECTION,
  randomizeCollection,
  RANDOMIZE_COLLECTION,
  deleteCollectionSuccess,
  DELETE_COLLECTION_SUCCESS,
  setCollectionIdState,
  SET_COLLECTION_ID_STATE,
  setCollectionNameState,
  SET_COLLECTION_NAME_STATE,

} from './collection';

describe('fetchCollectionsRequest', () => {
  it('Should return the action', () => {
    const action = fetchCollectionsRequest();
    expect(action).toEqual({ type: FETCH_COLLECTIONS_REQUEST });
  });
});

describe('fetchCollectionsSuccess', () => {
  it('Should return the action', () => {
    const collections = [
      {
        "name": "Korean BBQ",
        "createdAt": "2018-11-26T23:32:03.049Z",
        "updatedAt": "2018-11-26T23:32:03.049Z",
        "id": "5bfc827341ac9904b8e885da"
      }
    ]
    const action = fetchCollectionsSuccess(collections);
    expect(action).toEqual({ 
      type: FETCH_COLLECTIONS_SUCCESS,
      collections,
    });
  });
});

describe('fetchCollectionsError', () => {
  it('Should return the action', () => {
    const error = ('error');
    const action = fetchCollectionsError(error);
    expect(action).toEqual({ 
      type: FETCH_COLLECTIONS_ERROR,
      error,
    });
  });
});

describe('addCollection', () => {
  it('Should return the action', () => {
    const collection = { name: 'test' };
    const action = addCollection(collection);
    expect(action).toEqual({
      type: ADD_COLLECTION,
      collection,
    });
  });
});

describe('randomizeCollection', () => {
  it('Should return the action', () => {
    const winningCollection = [{
        "name": "Korean BBQ",
        "createdAt": "2018-11-26T23:32:03.049Z",
        "updatedAt": "2018-11-26T23:32:03.049Z",
        "id": "5bfc827341ac9904b8e885da"
      }];
    const action = randomizeCollection(winningCollection);
    expect(action).toEqual({
      type: RANDOMIZE_COLLECTION,
      winningCollection,
    });
  });
});

describe('deleteCollectionSuccess', () => {
  it('Should return the action', () => {
    const collection = [{
      "name": "Korean BBQ",
      "createdAt": "2018-11-26T23:32:03.049Z",
      "updatedAt": "2018-11-26T23:32:03.049Z",
      "id": "5bfc827341ac9904b8e885da"
    }];
    const action = deleteCollectionSuccess(collection);
    expect(action).toEqual({
      type: DELETE_COLLECTION_SUCCESS,
      collection,
    })
  });
});

describe('setCollectionIdState', () => {
  it('Should return the action', () => {
    const currentCollectionId = 'testid';
    const action = setCollectionIdState(currentCollectionId);
    expect(action).toEqual({
      type: SET_COLLECTION_ID_STATE,
      currentCollectionId
    });
  });
});

describe('setCollectionNameState', () => {
  it('Should return the action', () => {
    const currentCollectionName = 'testname';
    const action = setCollectionNameState(currentCollectionName);
    expect(action).toEqual({
      type: SET_COLLECTION_NAME_STATE,
      currentCollectionName,
    });
  });
});