import reducer from './restaurants';
import { fetchRestaurantsRequest, fetchRestaurantsSuccess, fetchRestaurantsError, addRestaurant, randomizeRestaurant, deleteRestaurantSuccess, setRestaurantIdState, setRestaurantNameState, clearRestaurantId, fetchYelpSearchResultsRequest, FETCH_YELP_SEARCH_RESULTS_SUCCESS, fetchYelpSearchResultsSuccess, fetchYelpSearchResultsError } from '../actions/restaurants';

describe('reducer', () => {
  it('Should handle the fetch restaurants request action', () => {
    const state = {
      loading: '',
      error: '',
    };
    const action = fetchRestaurantsRequest();
    const newState = reducer(state, action);
    expect(newState).toEqual({
      loading: true,
      error: null,
    });
  }); 

  it('Should handle the fetch restaurants success action', () => {
    const state = {
      loading: '',
      error: '',
      restaurants: 'test',
    };
    const action = fetchRestaurantsSuccess('testRestaurant');
    const newState = reducer(state, action);
    expect(newState).toEqual({
      loading: false,
      error: null,
      restaurants: 'testRestaurant',
    });
  });

  it('Should handle the fetch restaurants error action', () => {
    const state = {
      loading: '',
      error: 'test',
    };
    const action = fetchRestaurantsError('error');
    const newState = reducer(state, action);
    expect(newState).toEqual({
      loading: false,
      error: 'error',
    });
  });

  it('Should handle the add restaurant action', () => {
    const state = {
      restaurants: ['1'],
    };
    const action = addRestaurant('2');
    const newState = reducer(state, action);
    expect(newState).toEqual({
      restaurants: ['1', '2'],
    });
  });

  it('Should handle the randomize restaurant action', () => {
    const state = {
      restaurants: ['1'],
      winningRestaurant: '1',
    };
    const action = randomizeRestaurant('test');
    const newState = reducer(state, action);
    expect(newState).toEqual({
      restaurants: ['1'],
      winningRestaurant: 'You are eating at test tonight!',
    });
  });

  it('Should handle the delete restaurant success action', () => {
    const state = {
      restaurants: ['1'],
    }
    const action = deleteRestaurantSuccess();
    const newState = reducer(state, action);
    expect(newState).toEqual({
      restaurants: ['1'],
    });
  });

  it('Should handle the set restaurant id state action', () => {
    const state = {
      currentRestaurantId: '1',
      loading: false,
      error: '',
    };
    const action = setRestaurantIdState('id');
    const newState = reducer(state, action);
    expect(newState).toEqual({
      currentRestaurantId: 'id',
      loading: true,
      error: null,
    });
  });

  it('Should handle the set restaurant name state action', () => {
    const state = {
      currentRestaurantName: '',
    };
    const action = setRestaurantNameState('test');
    const newState = reducer(state, action);
    expect(newState).toEqual({
      currentRestaurantName: 'test',
    });
  });

  it('Should handle the clear restaurant id action', () => {
    const state = {
      currentRestaurantId: 'test',
    };
    const action = clearRestaurantId();
    const newState = reducer(state, action);
    expect(newState).toEqual({
      currentRestaurantId: '',
    });
  });

  it('Should handle the fetch yelp search results request action', () => {
    const state = {
      loading: '',
      error: '',
    };
    const action = fetchYelpSearchResultsRequest();
    const newState = reducer(state, action);
    expect(newState).toEqual({
      loading: true,
      error: null,
    });
  });

  it('Should handle the fetch yelp search results success action', () => {
    const state = {
      loading: '',
      error: '',
      yelpSearchResults: ''
    };
    const action = fetchYelpSearchResultsSuccess('test');
    const newState = reducer(state, action);
    expect(newState).toEqual({
      loading: false,
      error: null,
      yelpSearchResults: 'test',
    });
  });

  it('Should handle the fetch yelp search results error action', () => {
    const state = {
      loading: '',
      error: '',
    };
    const action = fetchYelpSearchResultsError('error');
    const newState = reducer(state, action);
    expect(newState).toEqual({
      loading: false,
      error: 'error',
    });
  });

  it('Should handle the initial state when nothing is passed in', () => {
    const state = undefined;
    const action = fetchRestaurantsRequest();
    const newState = reducer(state, action);
    expect(newState).toEqual({
      restaurants: [],
      loading: true,
      error: null,
      winningRestaurant: '',
      currentRestaurantId: '',
      currentCollectionName: 'Select Restaurant',
      yelpSearchResults: [{searchResult: [], createdAt: '', updatedAt: '', id: ''}],
    });
  });
});