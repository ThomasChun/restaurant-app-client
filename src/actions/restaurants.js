import {REACT_APP_API_BASE_URL} from '../config';

export const FETCH_RESTAURANTS_REQUEST = 'FETCH_RESTAURANTS_REQUEST';
export const fetchRestaurantsRequest = () => ({
  type: FETCH_RESTAURANTS_REQUEST
});

export const FETCH_RESTAURANTS_SUCCESS = 'FETCH_RESTAURANTS_SUCCESS';
export const fetchRestaurantsSuccess = (restaurants) => ({
  type: FETCH_RESTAURANTS_SUCCESS,
  restaurants,
});

export const FETCH_RESTAURANTS_ERROR = 'FETCH_RESTAURANTS_ERROR';
export const fetchRestaurantsError = (error) => ({
  type: FETCH_RESTAURANTS_ERROR,
  error,
});

export const fetchRestaurants = (collectionId) => dispatch => {
  dispatch(fetchRestaurantsRequest());
  return fetch(`${REACT_APP_API_BASE_URL}/api/restaurants`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(restaurants => {
      if (collectionId === 0) {
        return [];
      }
      const filteredRestaurants = restaurants.filter(restaurant => restaurant.collectionId === collectionId);
      dispatch(fetchRestaurantsSuccess(filteredRestaurants))
    }).catch(err => 
      dispatch(fetchRestaurantsError(err))
    );
}

export const ADD_RESTAURANT = 'ADD_RESTAURANT';
export const addRestaurant = (restaurant) => ({
  type: ADD_RESTAURANT,
  restaurant
});

export const postRestaurant = (value, collectionId) => dispatch => {
  return fetch(`${REACT_APP_API_BASE_URL}/api/restaurants`, {
    method: 'POST',
    headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: value,
      collectionId,
    }),
  })
  .then(res => res.json())
  .then(restaurant => dispatch(addRestaurant(restaurant)));
}

export const RANDOMIZE_RESTAURANT = 'RANDOMIZER RESTAURANT';
export const randomizeRestaurant = (winningRestaurant) => ({
  type: RANDOMIZE_RESTAURANT,
  winningRestaurant
});

export const DELETE_RESTAURANT_SUCCESS = 'DELETE_RESTAURANT_SUCCESS';
export const deleteRestaurantSuccess = () => ({
  type: DELETE_RESTAURANT_SUCCESS,
})

export const deleteRestaurants = (restaurantId) => dispatch => {
  return fetch(`${REACT_APP_API_BASE_URL}/api/restaurants/${restaurantId}`, {
    method: 'DELETE',
  })
  .then(data => {
    dispatch(deleteRestaurantSuccess())
  })
  .then(() => dispatch(fetchRestaurants(restaurantId)));
}

export const SET_RESTAURANT_ID_STATE = 'SET_RESTAURANT_ID_STATE';
export const setRestaurantIdState = (currentRestaurantId) => ({
  type: SET_RESTAURANT_ID_STATE,
  currentRestaurantId,
})

export const CLEAR_RESTAURANT_ID = 'CLEAR_RESTAURANT_ID';
export const clearRestaurantId = () => ({
  type: CLEAR_RESTAURANT_ID,
})

// export const restaurantInfo = (restaurant) => dispatch => {
//   return fetch(`${REACT_APP_API_BASE_URL}/api/restaurants/${restaurant}`, {
//     method: 'GET',
//   })
// }