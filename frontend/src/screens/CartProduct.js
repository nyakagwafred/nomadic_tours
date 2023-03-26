import React from 'react';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { getTourData } from '../data/ToursStore';
import moneyFormatter from '../components/utils/CurrencyFormatter';
import { AiFillDelete } from 'react-icons/ai';
import { Container } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import { Tooltip } from 'react-tooltip';

function CartProduct(props) {
	const cart = useContext(CartContext);
	const id = props.id;
	const quantity = props.quantity;
	const tourData = getTourData(id);

	return (
		<>
			<Container>
				<Row>
					<Col sm={8}>
						To {tourData.tour_name} at{' '}
						<u>{moneyFormatter.format(quantity * tourData.price)}</u> for{' '}
						{tourData.duration} days.
					</Col>
					<Col sm={4}>
						<Button
							variant="danger"
							size="sm"
							onClick={() => cart.deleteFromCart(id)}
						>
							{' '}
							<a
								data-tooltip-id="my-tooltip"
								data-tooltip-content="Remove item from cart"
							>
								<AiFillDelete />
							</a>
						</Button>
					</Col>
				</Row>

				<hr></hr>
				<Tooltip id="my-tooltip" />
			</Container>
		</>
	);
}

export default CartProduct;
