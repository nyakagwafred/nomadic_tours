import React, { useState, useContext } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import {
	CartDispatchContext,
	CartStateContext,
	addToCart,
	removeFromCart,
} from '../context/TestCartContext';
import moneyFormatter from '../components/utils/CurrencyFormatter';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import TourScreen from './TourScreen';

function TourCard({ tour }) {
	//Old context API

	//New context API
	const [isAdded, setIsAdded] = useState(false);
	const dispatch = useContext(CartDispatchContext);
	const { tours } = useContext(CartStateContext);
	//Destructure the tour object
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
	} = tour;

	const handleAddToCart = () => {
		const product = { ...tour, people: 1 };
		addToCart(dispatch, product);
		setIsAdded(true);
	};

	const handleRemoveFromCart = () => {
		removeFromCart(dispatch, _id);
		setIsAdded(false);
	};

	return (
		<Card className="mt-5">
			<Link
				to={`#`}
				className="text-monospace text-decoration-none text-success"
			>
				<Card.Img
					src={image}
					variant="top"
					style={{
						height: '200px',
						objectFit: 'cover',
					}}
				></Card.Img>
			</Link>

			<Card.Body>
				<Link
					to={`#`}
					className="text-monospace text-decoration-none text-success"
				>
					<Card.Title as="div" className="text-center">
						<strong>
							{tour_name} for {duration} Days
						</strong>
					</Card.Title>
					<hr></hr>
				</Link>
				<Card.Text as="div">
					<div className="my-3 text-center">
						Category <Badge bg="success">{category}</Badge>
					</div>
					<hr></hr>
				</Card.Text>
				<Card.Text as="div">
					<div style={{ color: '#1B3D6C' }}>{tour_brief}</div>
				</Card.Text>
				<hr></hr>
				<Card.Text as="div" className="text-center">
					<div className="my-3">
						{rating} from {num_reviews} reviews{' '}
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
					{moneyFormatter.format(price)}
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
