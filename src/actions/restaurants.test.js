import { 
  fetchRestaurantsRequest, 
  FETCH_RESTAURANTS_REQUEST,
  fetchRestaurantsSuccess,
  FETCH_RESTAURANTS_SUCCESS,
  fetchRestaurantsError,
  FETCH_RESTAURANTS_ERROR,
  addRestaurant,
  ADD_RESTAURANT,
  randomizeRestaurant,
  RANDOMIZE_RESTAURANT,
  deleteRestaurantSuccess,
  DELETE_RESTAURANT_SUCCESS,
  setRestaurantIdState,
  SET_RESTAURANT_ID_STATE,
  setRestaurantNameState,
  SET_RESTAURANT_NAME_STATE,
  clearRestaurantId,
  CLEAR_RESTAURANT_ID,
  fetchYelpSearchResultsRequest,
  FETCH_YELP_SEARCH_RESULTS_REQUEST,
  fetchYelpSearchResultsSuccess,
  FETCH_YELP_SEARCH_RESULTS_SUCCESS,
  fetchYelpSearchResultsError,
  FETCH_YELP_SEARCH_RESULTS_ERROR,
  yelpSearch,
  YELP_SEARCH,
  deleteYelpSearch,
  deleteYelpSearchSuccess,
  DELETE_YELP_SEARCH_SUCCESS,
} from './restaurants';

describe('fetchRestaurantsRequest', () => {
  it('Should return the action', () => {
    const action = fetchRestaurantsRequest();
    expect(action).toEqual({ 
      type: FETCH_RESTAURANTS_REQUEST 
    });
  });
});

describe('fetchRestaurantsSuccess', () => {
  it('Should return the action', () => {
    const restaurants = ['test'];
    const action = fetchRestaurantsSuccess(restaurants);
    expect(action).toEqual({
      type: FETCH_RESTAURANTS_SUCCESS,
      restaurants,
    });
  });
});

describe('fetchRestaurantError', () => {
  it('Should return the action', () => {
    const error = 'error';
    const action = fetchRestaurantsError(error);
    expect(action).toEqual({
      type: FETCH_RESTAURANTS_ERROR,
      error,
    });
  });
});

// DO THE FETCH RESTAURANTS -- WITH MOCK FETCH
//
//
//
//
// -------------------------------------------

describe('addRestaurant', () => {
  it('Should return the action', () => {
    const restaurant = 'test';
    const action = addRestaurant(restaurant);
    expect(action).toEqual({
      type: ADD_RESTAURANT,
      restaurant,
    });
  });
});

// DO THE POST RESTAURANTS -- WITH MOCK FETCH
//
//
//
//
// -------------------------------------------

describe('randomizeRestaurant', () => {
  it('Should return the action', () => {
    const winningRestaurant = 'test';
    const action = randomizeRestaurant(winningRestaurant);
    expect(action).toEqual({
      type: RANDOMIZE_RESTAURANT,
      winningRestaurant,
    });
  });
});

describe('deleteRestaurantSuccess', () => {
  it('Should return the action', () => {
    const action = deleteRestaurantSuccess();
    expect(action).toEqual({
      type: DELETE_RESTAURANT_SUCCESS,
    });
  });
});

// DO THE DELETE RESTAURANTS -- WITH MOCK FETCH
//
//
//
//
// -------------------------------------------

describe('setRestaurantIdState', () => {
  it('Should return the action', () => {
    const currentRestaurantId = 'test';
    const action = setRestaurantIdState(currentRestaurantId);
    expect(action).toEqual({
      type: SET_RESTAURANT_ID_STATE,
      currentRestaurantId,
    });
  });
});

describe('setRestaurantNameState', () => {
  it('Should return the action', () => {
    const currentRestaurantName = 'test';
    const action = setRestaurantNameState(currentRestaurantName);
    expect(action).toEqual({
      type: SET_RESTAURANT_NAME_STATE,
      currentRestaurantName,
    });
  });
});

describe('clearRestaurantId', () => {
  it('Should return the action', () => {
    const action = clearRestaurantId();
    expect(action).toEqual({
      type: CLEAR_RESTAURANT_ID,
    });
  });
});

describe('fetchYelpSearchResultsRequest', () => {
  it('Should return the action', () => {
    const action = fetchYelpSearchResultsRequest();
    expect(action).toEqual({
      type: FETCH_YELP_SEARCH_RESULTS_REQUEST,
    });
  });
});

describe('fetchYelpSearchResultsSuccess', () => {
  it('Should return the action', () => {
    const yelpSearchResults = 'test';
    const action = fetchYelpSearchResultsSuccess(yelpSearchResults);
    expect(action).toEqual({
      type: FETCH_YELP_SEARCH_RESULTS_SUCCESS,
      yelpSearchResults,
    });
  });
});

describe('fetchYelpSearchResultsError', () => {
  it('Should return the action', () => {
    const error = 'test';
    const action = fetchYelpSearchResultsError(error);
    expect(action).toEqual({
      type: FETCH_YELP_SEARCH_RESULTS_ERROR,
      error,
    });
  });
});

// FETCH YELP SEARCH RESULTS -- WITH MOCK FETCH
//
//
//
//
// -------------------------------------------

describe('yelpSearch', () => {
  it('Should return the action', () => {
    const action = yelpSearch();
    expect(action).toEqual({
      type: YELP_SEARCH,
    });
  });
});

// POST YELP SEARCH RESULTS -- WITH MOCK FETCH
//
//
//
//
// -------------------------------------------

describe('deleteYelpSearchSuccess', () => {
  it('Should return the action', () => {
    const action = deleteYelpSearchSuccess();
    expect(action).toEqual({
      type: DELETE_YELP_SEARCH_SUCCESS,
    });
  });
});

// DELETE YELP SEARCH RESULTS -- WITH MOCK FETCH
//
//
//
//
// -------------------------------------------