import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Tour({ tour }) {
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
					<div className="my-3">{tour.tour_desc}</div>
				</Card.Text>
				<Card.Text as="div">
					<div className="my-3">
						{tour.rating} from {tour.num_reviews} reviews{' '}
					</div>
				</Card.Text>
				<Card.Text as="h5">KES {tour.price}</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default Tour;
