import {
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_REQUEST,
  FETCH_RESTAURANTS_ERROR,
  ADD_RESTAURANT,
  RANDOMIZE_RESTAURANT,
  DELETE_RESTAURANT_SUCCESS,
  SET_RESTAURANT_ID_STATE,
} from '../actions/restaurants';

export const initialState = {
    restaurants: [],
    loading: false,
    error: null,
    winningRestaurant: '',
    currentRestaurantId: '',
}

export default function restaurantsReducer(state=initialState, action) {
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
  else if (action.type === RANDOMIZE_RESTAURANT) {
    return Object.assign({}, state, {
      restaurants: state.restaurants,
      winningRestaurant: `You are eating at ${action.winningRestaurant} tonight!`
    })
  }
  else if (action.type === DELETE_RESTAURANT_SUCCESS) {
    return Object.assign({}, state, {
      restaurants: [...state.restaurants.filter(restaurant => restaurant.id !== action.id)]
    });
  }
  else if (action.type === SET_RESTAURANT_ID_STATE) {
    return Object.assign({}, state, {
      currentRestaurantId: action.currentRestaurantId,
      loading: true,
      error: null
    })
  }
  return state;
}