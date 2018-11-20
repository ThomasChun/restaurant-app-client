import {
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_REQUEST,
  FETCH_RESTAURANTS_ERROR,
  ADD_RESTAURANT,
  // FETCH_RESTAURANTS,
  RANDOMIZE_RESTAURANT,
} from '../actions/restaurants';

const initialState = {
    restaurants: [],
    loading: false,
    error: null,
    winningRestaurant: ''
}

export default function reducer(state=initialState, action) {
  if (action.type === FETCH_RESTAURANTS_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  }
  else if (action.type === FETCH_RESTAURANTS_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null,
      restaurants: action.restaurants
    })
  }
  else if (action.type === FETCH_RESTAURANTS_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }
  else if (action.type === ADD_RESTAURANT) {
    return Object.assign({}, state, {
      restaurants: [...state.restaurants, action.restaurant]
    })
  }
  // else if (action.type === FETCH_RESTAURANTS) {
  //   return Object.assign({}, state, {
  //     restaurants: state.restaurants
  //   })
  // }
  else if (action.type === RANDOMIZE_RESTAURANT) {
    return Object.assign({}, state, {
      restaurants: state.restaurants,
      winningRestaurant: `You are eating at ${action.winningRestaurant} tonight!`
    })
  }
  return state;
}