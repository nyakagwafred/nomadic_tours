import React, { useReducer, createContext, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const initialState = {
	isCartOpen: false,
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
		case 'ADD_TOUR_TO_CART':
			const id = action.payload.cartItem.id;
			const isOld = state.tours.map((tour) => tour.id).includes(id);
			let cartItems = null;
			if (isOld) {
				const tours = state.tours.map((tour) => {
					if (tour.id === id) {
						return {
							...tour,
							quantity: tour.quantity + 1,
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
		case 'REMOVE_TOUR_FROM_CART':
			return {
				...state,
				tours: state.tours.filter(
					(tour) => tour.id !== action.payload.cartItemId,
				),
			};
		case 'CLEAR_CART':
			return {
				...state,
				...initialState,
			};
		default:
			throw new Error(`Unknown action: ${action.type}`);
	}
};

export const toggleCartPopup = (dispatch) => {
	return dispatch({
		type: 'TOGGLE_CART_POPUP',
	});
};

export const addToCart = (dispatch, cartItem) => {
	return dispatch({
		type: 'ADD_TOUR_TO_CART',
		payload: {
			cartItem: cartItem,
		},
	});
};

export const removeFromCart = (dispatch, cartItemId) => {
	return dispatch({
		type: 'REMOVE_TOUR_FROM_CART',
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
	const persistedCartState = {
		isCartOpen: false,
		tours: persistedCartItems || [],
	};
	const [state, dispatch] = useReducer(reducer, persistedCartState);
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
