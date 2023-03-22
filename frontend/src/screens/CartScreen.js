import React from 'react';
import { CartProvider, useCart } from 'react-use-cart';
import products from './data';

function CartScreen() {
	const { addItem } = useCart();
	return (
		<div>
			<h3>Products</h3>
			{products.map((p) => (
				<div key={p.id}>
					<button onClick={() => addItem(p)}>Add to cart</button>
				</div>
			))}
		</div>
	);
}

export default CartScreen;
