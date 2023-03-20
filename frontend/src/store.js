import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../src/features/auth/authSlice';
import tourReducer from '../src/features/tour/tourSlice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		tour: tourReducer,
	},
});

export default store;
