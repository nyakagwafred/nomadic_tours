import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import moneyFormatter from '../components/utils/CurrencyFormatter';

function TourCard({ tour }) {
	const cart = useContext(CartContext);
	const tourQuantity = cart.getTourQuantity(tour.id);

	return (
		<Card className="mt-5">
			<Link to={`/tour/${tour._id}`}>
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
					to={`/tour/${tour._id}`}
					className="text-monospace text-decoration-none text-success"
				>
					<Card.Title as="div">
						<strong>
							{tour.tour_name} for {tour.duration} Days
						</strong>
					</Card.Title>
				</Link>
				<Card.Text as="div">
					<div className="my-3">{tour.tour_brief}</div>
				</Card.Text>
				<Card.Text as="div">
					<div className="my-3">
						{tour.rating} from {tour.num_reviews} reviews{' '}
					</div>
				</Card.Text>
				<Card.Text as="h5">{moneyFormatter.format(tour.price)}</Card.Text>
				{tourQuantity > 0 ? (
					<Button
						variant="danger"
						onClick={() => cart.deleteFromCart(tour.id)}
						className="my-2"
					>
						Remove from cart
					</Button>
				) : (
					<Button variant="dark" onClick={() => cart.addOneToCart(tour.id)}>
						Add To Cart
					</Button>
				)}
			</Card.Body>
		</Card>
	);
}

export default TourCard;
