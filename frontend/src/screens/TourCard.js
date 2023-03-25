import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import moneyFormatter from '../components/utils/CurrencyFormatter';
import Rating from '../components/utils/Rating';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

function TourCard({ tour }) {
	const cart = useContext(CartContext);
	const tourQuantity = cart.getTourQuantity(tour.id);

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
					<div className="my-3">
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
				{tourQuantity > 0 ? (
					<>
						<Button
							variant="danger"
							onClick={() => cart.deleteFromCart(tour.id)}
							style={{
								alignItems: 'center',
								width: '100%',
								marginHorizontal: 20,
							}}
						>
							Remove from Cart
						</Button>
					</>
				) : (
					<Button
						variant="dark"
						onClick={() => cart.addOneToCart(tour.id)}
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
