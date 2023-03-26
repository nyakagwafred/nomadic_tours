import React from 'react';
import { createContext, useState } from 'react';
import { getTourData } from '../data/ToursStore';

export const CartContext = createContext({
	items: [],
	getTourQuantity: () => {},
	addOneToCart: () => {},
	removeOneFromCart: () => {},
	deleteFromCart: () => {},
	getTotalCost: () => {},
});

export function CartProvider({ children }) {
	const [cartTours, setCartTours] = useState([]);

	// [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]
	function getTourQuantity(id) {
		const quantity = cartTours.find((element) => element.id === id);

		if (quantity === undefined) {
			return 0;
		} else {
			return 1;
		}
	}

	function addOneToCart(id) {
		const quantity = getTourQuantity(id);

		if (quantity === 0) {
			// product is not in cart
			setCartTours([
				...cartTours,
				{
					id: id,
					quantity: 1,
				},
			]);
			console.log(cartTours);
		} else {
			// product is in cart
			// [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]    add to product id of 2
			setCartTours(
				cartTours.map(
					(product) =>
						product.id === id // if condition
							? { ...product, quantity: product.quantity + 1 } // if statement is true
							: product, // if statement is false
				),
			);
		}
	}

	function removeOneFromCart(id) {
		const quantity = getTourQuantity(id);

		if (quantity === 1) {
			deleteFromCart(id);
		} else {
			setCartTours(
				cartTours.map(
					(product) =>
						product.id === id // if condition
							? { ...product, quantity: product.quantity - 1 } // if statement is true
							: product, // if statement is false
				),
			);
		}
	}

	function deleteFromCart(id) {
		// [] if an object meets a condition, add the object to array
		// [product1, product2, product3]
		// [product1, product3]
		setCartTours((cartTours) =>
			cartTours.filter((currentProduct) => {
				return currentProduct.id !== id;
			}),
		);
	}

	function getTotalCost() {
		let totalCost = 0;
		cartTours.map((cartItem) => {
			const productData = getTourData(cartItem.id);
			totalCost += productData.price * cartItem.quantity;
		});
		return totalCost;
	}

	const contextValue = {
		items: cartTours,
		getTourQuantity,
		addOneToCart,
		removeOneFromCart,
		deleteFromCart,
		getTotalCost,
	};

	return (
		<CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
	);
}

export default CartProvider;

// CODE DOWN HERE

// Context (cart, addToCart, removeCart)
// Provider -> gives your React app access to all the things in your context
