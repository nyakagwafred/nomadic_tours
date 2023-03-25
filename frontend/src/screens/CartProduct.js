import React from 'react';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { getTourData } from '../data/toursStore';
import moneyFormatter from '../components/utils/CurrencyFormatter';
import { AiFillDelete } from 'react-icons/ai';
import { Container } from 'react-bootstrap';

function CartProduct(props) {
	const cart = useContext(CartContext);
	const id = props.id;
	const quantity = props.quantity;
	const tourData = getTourData(id);

	return (
		<>
			<Container>
				<p>
					To {tourData.tour_name}{' '}
					{moneyFormatter.format(quantity * tourData.price)}
				</p>

				<Button
					variant="danger"
					size="sm"
					onClick={() => cart.deleteFromCart(id)}
				>
					<AiFillDelete />
				</Button>
				<hr></hr>
			</Container>
		</>
	);
}

export default CartProduct;
