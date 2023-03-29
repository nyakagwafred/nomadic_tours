import React from 'react';
import { createContext, useState } from 'react';
import { getTourData } from '../data/ToursStore';

export const CartContext = createContext({
	items: [],
	getTourQuantity: () => {},
	removeFromCart: () => {},
	addToCart: () => {},
	addOneToCart: () => {},
	removeOneFromCart: () => {},
	getTotalCost: () => {},
});

export function CartProvider({ children }) {
	const [cartTours, setCartTours] = useState([]);
	// [ { id: 1 , quantity: 3, people: 1 }, { id: 2, quantity: 1, people: 1 } ]
	function getTourQuantity(id) {
		const quantity = cartTours.find((element) => element.id === id);

		if (quantity === undefined) {
			return 0;
		} else {
			return 1;
		}
	}
	//Add tour to cart
	function addToCart(id) {
		console.log('Add to cart');
		console.log(cartTours);
		const quantity = getTourQuantity(id);
		if (quantity === 0) {
			// product is not in cart
			setCartTours([
				...cartTours,
				{
					id: id,
					quantity: 1,
					people: 1,
				},
			]);
		} else {
			setCartTours(
				cartTours.map(
					(tour) =>
						tour.id === id // if condition
							? { ...tour, quantity: tour.quantity + 1 } // if statement is true
							: tour, // if statement is false
				),
			);
		}
	}
	//Remove on passenger from booked tour
	function removeOneFromCart(id) {
		const quantity = getTourQuantity(id);

		if (quantity === 1) {
			removeFromCart(id);
		} else {
			setCartTours(
				cartTours.map(
					(tour) =>
						tour.id === id // if condition
							? { ...tour, quantity: 1, people: tour.people - 1 } // if statement is true
							: tour, // if statement is false
				),
			);
		}
		console.log('Remove one from cart');
		console.log(cartTours);
	}
	//Remove tour from cart
	function removeFromCart(id) {
		console.log('Remove to cart');
		console.log(cartTours);
		setCartTours((cartTours) =>
			cartTours.filter((currentTour) => {
				return currentTour.id !== id;
			}),
		);
	}
	// Add one tour to cart
	function addOneToCart(id) {
		const quantity = getTourQuantity(id);
		const { people } = cartTours;

		if (quantity === 1) {
			//removeFromCart(id);
			console.log(`Number of tours ${quantity}`);
			console.log(`Number of people ${people}`);
		} else {
			setCartTours(
				cartTours.map(
					(tour) =>
						tour.id === id // if condition
							? { ...tour, quantity: 10, people: tour.people + 1 } // if statement is true
							: tour, // if statement is false
				),
			);
		}
		console.log('Add one to cart');
		console.log(cartTours);
	}
	//Get total cost based on numbers of tours and booked passengers
	function getTotalCost() {
		let totalCost = 0;
		cartTours.map((cartItem) => {
			const productData = getTourData(cartItem.id);
			totalCost += productData.price * cartItem.people;
		});
		return totalCost;
	}

	const contextValue = {
		items: cartTours,
		getTourQuantity,
		addOneToCart,
		removeOneFromCart,
		removeFromCart,
		getTotalCost,
		addToCart,
	};

	return (
		<CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
	);
}

export default CartProvider;

// CODE DOWN HERE

// Context (cart, addToCart, removeCart)
// Provider -> gives your React app access to all the things in your context
