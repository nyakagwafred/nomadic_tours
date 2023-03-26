import React from 'react';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { getTourData } from '../data/ToursStore';
import moneyFormatter from '../components/utils/CurrencyFormatter';
import { AiFillDelete } from 'react-icons/ai';
import { IoPersonAdd, IoPersonRemove } from 'react-icons/io5';
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
					{/* Product catalog in cart */}
					<Col sm={6}>
						To {tourData.tour_name} at{' '}
						<u>{moneyFormatter.format(quantity * tourData.price)}</u> for{' '}
						{tourData.duration} days.
					</Col>
					{/* Remove tour from cart */}
					<Col sm={2}>
						<Button
							variant="danger"
							size="sm"
							onClick={() => cart.removeFromCart(id)}
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
					{/* Add a person to tour. */}
					<Col sm={2}>
						<Button
							variant="success"
							size="sm"
							onClick={() => cart.removeOneFromCart(id)}
						>
							{' '}
							<a
								data-tooltip-id="my-tooltip"
								data-tooltip-content="Remove a person from this trip"
							>
								<IoPersonRemove />
							</a>
						</Button>
					</Col>
					{/* Remove a person from tour. */}
					<Col sm={2}>
						<Button
							variant="success"
							size="sm"
							onClick={() => cart.addOneToCart(id)}
						>
							{' '}
							<a
								data-tooltip-id="my-tooltip"
								data-tooltip-content="Add a person to this trip"
							>
								<IoPersonAdd />
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
