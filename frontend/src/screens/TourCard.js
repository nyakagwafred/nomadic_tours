import React, { useState, useContext } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import {
	CartDispatchContext,
	addToCart,
	removeFromCart,
} from '../context/TestCartContext';
import moneyFormatter from '../components/utils/CurrencyFormatter';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

function TourCard({ tour }) {
	//Old context API
	const cart = useContext(CartContext);
	const tourQuantity = cart.getTourQuantity(tour.id);
	//New context API
	const [isAdded, setIsAdded] = useState(false);
	const dispatch = useContext(CartDispatchContext);
	//Destructure the tour object
	const {
		image,
		name,
		price,
		_id,
		category,
		tour_brief,
		duration,
		num_reviews,
	} = tour;

	const handleAddToCart = () => {
		const product = { ...tour, quantity: 1, people: 1 };
		addToCart(dispatch, product);
		setIsAdded(true);
		// setTimeout(() => {
		// 	setIsAdded(false);
		// }, 2500);
	};

	const handleRemoveFromCart = () => {
		removeFromCart(dispatch, _id);
		setIsAdded(false);
		console.log('handle remove from cart');
	};

	return (
		<Card className="mt-5">
			<Link to={`/tour/${tour.id}`}>
				<Card.Img
					src={tour.image}
					variant="top"
					style={{
						height: '200px',
						objectFit: 'cover',
					}}
				></Card.Img>
			</Link>

			<Card.Body>
				<Link
					to={`/tour/${tour.id}`}
					className="text-monospace text-decoration-none text-success"
				>
					<Card.Title as="div" className="text-center">
						<strong>
							{tour.tour_name} for {tour.duration} Days
						</strong>
					</Card.Title>
					<hr></hr>
				</Link>
				<Card.Text as="div">
					<div className="my-3 text-center">
						Category <Badge bg="success">{tour.category}</Badge>
					</div>
					<hr></hr>
				</Card.Text>
				<Card.Text as="div">
					<div style={{ color: '#1B3D6C' }}>{tour.tour_brief}</div>
				</Card.Text>
				<hr></hr>
				<Card.Text as="div" className="text-center">
					<div className="my-3">
						{tour.rating} from {tour.num_reviews} reviews{' '}
					</div>
				</Card.Text>
				<hr></hr>
				<Card.Text
					as="div"
					style={{ color: '#FFD700' }}
					className="text-center bg-light"
				>
					<BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />{' '}
					<BsStarHalf />
				</Card.Text>
				<hr></hr>
				<Card.Text as="h5" className="text-center">
					{moneyFormatter.format(tour.price)}
				</Card.Text>
				<hr></hr>

				{isAdded ? (
					<Button
						variant="danger"
						onClick={handleRemoveFromCart}
						style={{
							alignItems: 'center',
							width: '100%',
							marginHorizontal: 20,
						}}
					>
						Remove from Cart
					</Button>
				) : (
					<Button
						variant="dark"
						onClick={handleAddToCart}
						style={{
							alignItems: 'center',
							width: '100%',
							marginHorizontal: 20,
						}}
					>
						Add to Cart
					</Button>
				)}
			</Card.Body>
		</Card>
	);
}

export default TourCard;
