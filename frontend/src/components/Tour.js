import React from 'react';
import { Card } from 'react-bootstrap';

function Tour({ tour }) {
	return (
		<Card my-3 p-3 rounded>
			<a href={tour.id}>
				<Card.Img
					src={tour.image}
					variant="top"
					style={{
						height: '200px',
						objectFit: 'cover',
					}}
				></Card.Img>
			</a>

			<Card.Body>
				<a href={tour.id}>
					<Card.Title as="div">
						<strong>
							{tour.tour_name} for {tour.duration} Days
						</strong>
					</Card.Title>
				</a>
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
