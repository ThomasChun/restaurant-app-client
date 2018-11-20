import {
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_REQUEST,
  FETCH_COLLECTIONS_ERROR,
  ADD_COLLECTION,
  RANDOMIZE_COLLECTION,
  DELETE_COLLECTION_SUCCESS,
  SET_COLLECTION_ID_STATE,
} from '../actions/collection';

const initialState = {
  collections: [],
  loading: false,
  error: null,
  winningCollection: '',
  currentCollectionId: '',
}

export default function collectionsReducer(state=initialState, action) {
  if (action.type === FETCH_COLLECTIONS_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  }
  else if (action.type === FETCH_COLLECTIONS_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null,
      collections: action.collections
    })
  }
  else if (action.type === FETCH_COLLECTIONS_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }
  else if (action.type === ADD_COLLECTION) {
    return Object.assign({}, state, {
      collections: [...state.collections, action.collection]
    })
  }
  else if (action.type === RANDOMIZE_COLLECTION) {
    return Object.assign({}, state, {
      collections: state.collections,
      winningCollection: `You are eating at restaurant from the ${action.winningCollection} collection tonight!`
    })
  }
  else if (action.type === DELETE_COLLECTION_SUCCESS) {
    return Object.assign({}, state, {
      collections: [...state.collections.filter(collection => collection.id !== action.id)]
    });
  }
  else if (action.type === SET_COLLECTION_ID_STATE) {
    return Object.assign({}, state, {
      currentCollectionId: action.currentCollectionId,
      loading: true,
      error: null
    })
  }
  return state;
}