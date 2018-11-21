import {REACT_APP_API_BASE_URL} from '../config';

export const FETCH_COLLECTIONS_REQUEST = 'FETCH_COLLECTIONS_REQUEST';
export const fetchCollectionsRequest = () => ({
  type: FETCH_COLLECTIONS_REQUEST
});

export const FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS';
export const fetchCollectionsSuccess = (collections) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  collections,
});

export const FETCH_COLLECTIONS_ERROR = 'FETCH_COLLECTIONS_ERROR';
export const fetchCollectionsError = (error) => ({
  type: FETCH_COLLECTIONS_ERROR,
  error,
});

export const fetchCollections = () => dispatch => {
  dispatch(fetchCollectionsRequest());
  return fetch(`${REACT_APP_API_BASE_URL}/api/collections`) 
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data =>
      dispatch(fetchCollectionsSuccess(data))
    ).catch(err => 
      dispatch(fetchCollectionsError(err))
    );
}

export const ADD_COLLECTION = 'ADD_COLLECTION';
export const addCollection = (collection) => ({
  type: ADD_COLLECTION,
  collection
});

export const postCollection = (value) => dispatch => {
  return fetch(`${REACT_APP_API_BASE_URL}/api/collections`, {
    method: 'POST',
    headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: value
    }),
  })
  .then(res => res.json())
  .then(collection => dispatch(addCollection(collection)));
}

export const RANDOMIZE_COLLECTION = 'RANDOMIZE_COLLECTION';
export const randomizeCollection = (winningCollection) => ({
  type: RANDOMIZE_COLLECTION,
  winningCollection,
});

export const DELETE_COLLECTION_SUCCESS = 'DELETE_COLLECTION_SUCCESS';
export const deleteCollectionSuccess = (collection) => ({
  type: DELETE_COLLECTION_SUCCESS,
  collection,
})

export const deleteCollection = (collectionId) => dispatch => {
  return fetch(`${REACT_APP_API_BASE_URL}/api/collections/${collectionId}`, {
    method: 'DELETE',
  })
  .then(data => dispatch(deleteCollectionSuccess(data)))
  .then(() => dispatch(fetchCollections()));
}

export const SET_COLLECTION_ID_STATE = 'SET_COLLECTION_ID_STATE';
export const setCollectionIdState = (currentCollectionId) => ({
  type: SET_COLLECTION_ID_STATE,
  currentCollectionId,
})

export const SET_COLLECTION_NAME_STATE = 'SET_COLLECTION_NAME_STATE';
export const setCollectionNameState = (currentCollectionName) => ({
  type: SET_COLLECTION_NAME_STATE,
  currentCollectionName,
})