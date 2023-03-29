import React, { useReducer, createContext, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const initialState = {
	tours: [],
};

export const CartStateContext = createContext();
export const CartDispatchContext = createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case 'TOGGLE_CART_POPUP':
			return {
				...state,
				isCartOpen: !state.isCartOpen,
			};
		/*************************************** */
		case 'ADD_TOUR_TO_CART':
			let id = action.payload.cartItem._id;
			let isOld = state.tours.map((tour) => tour.id).includes(id);
			let cartItems = null;
			if (isOld) {
				const tours = state.tours.map((tour) => {
					if (tour.id === id) {
						return {
							...tour,
						};
					}
					return tour;
				});
				cartItems = [...tours];
			} else {
				cartItems = [...state.tours, action.payload.cartItem];
			}
			return {
				...state,
				tours: cartItems,
			};
		/*************************************** */
		case 'ADD_ONE_TO_TOUR':
			id = action.payload.cartItemId;
			isOld = state.tours.map((tour) => tour._id).includes(id);
			cartItems = null;
			if (isOld) {
				const tours = state.tours.map((tour) => {
					if (tour._id === id) {
						return {
							...tour,
							people: tour.people + 1,
						};
					}
					return tour;
				});
				cartItems = [...tours];
			} else {
				console.log('Not found');
				cartItems = [...state.tours, action.payload.cartItem];
			}
			return {
				...state,
				tours: cartItems,
			};
		/*************************************** */
		case 'REMOVE_ONE_FROM_TOUR':
			id = action.payload.cartItemId;
			isOld = state.tours.map((tour) => tour._id).includes(id);
			cartItems = null;
			if (isOld) {
				const tours = state.tours.map((tour) => {
					if (tour._id === id) {
						return {
							...tour,
							people: tour.people - 1,
						};
					}
					return tour;
				});
				cartItems = [...tours];
			} else {
				console.log('Not found');
				cartItems = [...state.tours, action.payload.cartItem];
			}
			return {
				...state,
				tours: cartItems,
			};
		/*************************************** */
		case 'REMOVE_TOUR_FROM_CART':
			return {
				...state,
				tours: state.tours.filter(
					(tour) => tour._id !== action.payload.cartItemId,
				),
			};
		/*************************************** */
		case 'CLEAR_CART':
			return {
				...state,
				...initialState,
			};
		default:
			throw new Error(`Unknown action: ${action.type}`);
	}
};
/*******************************************************/
//Actions to manage state
export const toggleCartPopup = (dispatch) => {
	return dispatch({
		type: 'TOGGLE_CART_POPUP',
	});
};
//Add a tour to cart
export const addToCart = (dispatch, cartItem) => {
	return dispatch({
		type: 'ADD_TOUR_TO_CART',
		payload: {
			cartItem: cartItem,
		},
	});
};
//Add a person to a tour
export const addOneToCart = (dispatch, cartItemId) => {
	return dispatch({
		type: 'ADD_ONE_TO_TOUR',
		payload: {
			cartItemId: cartItemId,
		},
	});
};
//Remove a tour from cart
export const removeFromCart = (dispatch, cartItemId) => {
	return dispatch({
		type: 'REMOVE_TOUR_FROM_CART',
		payload: {
			cartItemId: cartItemId,
		},
	});
};

//Remove a person from a tour
export const removeOneFromCart = (dispatch, cartItemId) => {
	return dispatch({
		type: 'REMOVE_ONE_FROM_TOUR',
		payload: {
			cartItemId: cartItemId,
		},
	});
};

export const clearCart = (dispatch) => {
	return dispatch({
		type: 'CLEAR_CART',
	});
};

const CartProvider = ({ children }) => {
	const [persistedCartItems, setPersistedCartItems] = useLocalStorage(
		'cartItems',
		[],
	);
	//console.log(persistedCartItems);
	const persistedCartState = {
		tours: persistedCartItems || [],
	};
	const [state, dispatch] = useReducer(reducer, persistedCartState);
	//console.log(persistedCartItems);
	useEffect(() => {
		setPersistedCartItems(state.tours);
	}, [JSON.stringify(state.tours)]);
	return (
		<CartDispatchContext.Provider value={dispatch}>
			<CartStateContext.Provider value={state}>
				{children}
			</CartStateContext.Provider>
		</CartDispatchContext.Provider>
	);
};

export default CartProvider;
