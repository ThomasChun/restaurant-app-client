import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import collectionsReducer from './reducers/collections';
import restaurantsReducer from './reducers/restaurants';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        restaurant: restaurantsReducer,
        collection: collectionsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
);

export default store;