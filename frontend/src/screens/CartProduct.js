import React from 'react';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import moneyFormatter from '../components/utils/CurrencyFormatter';
import { AiFillDelete } from 'react-icons/ai';
import { IoPersonAdd, IoPersonRemove } from 'react-icons/io5';
import { Container } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import { Tooltip } from 'react-tooltip';
import {
	CartDispatchContext,
	CartStateContext,
	addToCart,
	removeFromCart,
	addOneToCart,
	removeOneFromCart,
} from '../context/TestCartContext';
import Message from '../components/utils/Message';

function CartProduct({ tour }) {
	const dispatch = useContext(CartDispatchContext);
	//const { tours } = useContext(CartStateContext);

	const { _id, people, tour_name, duration, price, country } = tour;

	//Cart actions handlers
	const handleRemoveFromCart = () => {
		removeFromCart(dispatch, _id);
	};
	const handleRemoveOneFromCart = () => {
		removeOneFromCart(dispatch, _id);
	};
	const handleAddOneToCart = () => {
		addOneToCart(dispatch, _id);
	};

	return (
		<>
			<Container>
				<Row>
					{/* Product catalog in cart */}
					<Col sm={6}>
						{people < 1 && (
							<Message>A trip should have at least one person</Message>
						)}
						{people >= 10 && <Message>A max of 10 people allowed.</Message>}
						<p>
							To {tour_name} at <u>{moneyFormatter.format(people * price)}</u>{' '}
							for {duration} days with{' '}
							{people > 1 ? `${people} people` : `${people} person`}.
						</p>
					</Col>
					{/* Remove tour from cart */}
					<Col sm={2}>
						<Button variant="danger" size="sm" onClick={handleRemoveFromCart}>
							{' '}
							<a
								data-tooltip-id="my-tooltip"
								data-tooltip-content="Remove item from cart"
							>
								<AiFillDelete />
							</a>
						</Button>
					</Col>
					{/* Remove a person from tour */}
					<Col sm={2}>
						<Button
							variant="success"
							size="sm"
							onClick={handleRemoveOneFromCart}
							disabled={people < 1}
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
					{/* Add a person to tour. */}
					<Col sm={2}>
						<Button
							variant="success"
							size="sm"
							onClick={handleAddOneToCart}
							disabled={people >= 10}
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
