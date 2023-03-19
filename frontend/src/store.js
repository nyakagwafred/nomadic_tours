import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({});

const middleware = [thunk];

const store = configureStore(
	reducer,
	initialSate,
	composeWithDevTools(applyMiddleware([...middleware])),
);

export default store;
