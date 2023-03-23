import React from 'react';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { getTourData } from '../data/ToursStore';

function CartProduct(props) {
	const cart = useContext(CartContext);
	const id = props.id;
	const quantity = props.quantity;
	const tourData = getTourData(id);
	//console.log(cart.item);

	return (
		<>
			<h3>{tourData.title}</h3>
			<p>{quantity} total</p>
			<p>KES: {(quantity * tourData.price).toFixed(2)}</p>
			<Button size="sm" onClick={() => cart.deleteFromCart(id)}>
				Remove
			</Button>
		</>
	);
}

export default CartProduct;
