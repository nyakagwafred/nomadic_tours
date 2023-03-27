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

function CartProduct(tour, tours) {
	const dispatch = useContext(CartDispatchContext);
	//const { tours } = useContext(CartStateContext);
	const {
		image,
		price,
		_id,
		category,
		tour_brief,
		duration,
		num_reviews,
		tour_name,
		rating,
		quantity,
		tourists,
	} = tour;

	//Cart actions handlers
	const handleRemoveFromCart = () => {
		removeFromCart(dispatch, tour.tour._id);
	};
	const handleRemoveOneFromCart = () => {
		removeOneFromCart(dispatch, tour._id);
	};
	const handleAddOneToCart = () => {
		//addOneToCart(dispatch, tour.tour._id);
		console.log(tours);
		//console.log(tour.tour._id);
	};

	return (
		<>
			<Container>
				<Row>
					{/* Product catalog in cart */}
					<Col sm={6}>
						<p>
							To {tour.tour.tour_name} at{' '}
							<u>{moneyFormatter.format(tour.tour.price)}</u> for{' '}
							{tour.tour.duration} days with {tour.tour.tourists} person.
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
						<Button variant="success" size="sm" onClick={handleAddOneToCart}>
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
