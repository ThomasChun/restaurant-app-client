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

// export const fetchRestaurants = () => dispatch => {
//   dispatch(fetchRestaurantsRequest());
//   return fetch('http://localhost:8080/api/restaurants/')
//     .then(res => {
//       if (!res.ok) {
//         throw new Error(res.statusText);
//       }
//       return res.json();
//     })
//     .then(data =>
//       dispatch(fetchRestaurantsSuccess(data))
//     ).catch(err => 
//       dispatch(fetchRestaurantsError(err))
//     );
// }

export const FETCH_RESTAURANTS = 'FETCH_RESTAURANTS';
export const fetchRestaurants = () => ({
  type: FETCH_RESTAURANTS,
});

export const ADD_RESTAURANT = 'ADD_RESTAURANT';
export const addRestaurant = (restaurant) => ({
  type: ADD_RESTAURANT,
  restaurant
});

export const RANDOMIZE_RESTAURANT = 'RANDOMIZER RESTAURANT';
export const randomizeRestaurant = (winningRestaurant) => ({
  type: RANDOMIZE_RESTAURANT,
  winningRestaurant
});