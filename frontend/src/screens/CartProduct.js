import React from 'react';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { getTourData } from '../data/toursStore';
import moneyFormatter from '../components/utils/CurrencyFormatter';

function CartProduct(props) {
	const cart = useContext(CartContext);
	const id = props.id;
	const quantity = props.quantity;
	const tourData = getTourData(id);
	//console.log(cart.item);

	return (
		<>
			<h6>To {tourData.tour_name}</h6>
			<p>{quantity == 1 ? `${quantity} Person` : `${quantity} People`}</p>
			<p>{moneyFormatter.format(quantity * tourData.price)}</p>
			<Button
				variant="danger"
				size="sm"
				onClick={() => cart.deleteFromCart(id)}
			>
				Remove
			</Button>
			<hr></hr>
		</>
	);
}

export default CartProduct;
