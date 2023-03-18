import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
let tours = [
	{
		id: 1,
		price: 2000,
		image: '/images/cheetah.jpg',
		country: 'Kenya',
		tour_name: 'Nanyuki',
		tour_desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis non mauris et viverra. Sed vel orci elit. Aenean fringilla, ante porttitor semper facilisis, arcu turpis gravida arcu, nec mollis leo tellus a tortor.',
		num_reviews: 10,
		rating: 4,
		duration: 20,
	},
	{
		id: 2,
		price: 3000,
		image: '/images/ballon.jpg',
		country: 'Kenya',
		tour_name: 'Kisii',
		tour_desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis non mauris et viverra. Sed vel orci elit. Aenean fringilla, ante porttitor semper facilisis, arcu turpis gravida arcu, nec mollis leo tellus a tortor.',
		num_reviews: 7,
		rating: 3,
		duration: 9,
	},
	{
		id: 3,
		price: 4000,
		image: '/images/tree.jpg',
		country: 'Kenya',
		tour_name: 'Mombasa',
		tour_desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis non mauris et viverra. Sed vel orci elit. Aenean fringilla, ante porttitor semper facilisis, arcu turpis gravida arcu, nec mollis leo tellus a tortor.',
		num_reviews: 8,
		rating: 3,
		duration: 5,
	},
	{
		id: 4,
		price: 5000,
		image: '/images/van.jpg',
		country: 'Kenya',
		tour_name: 'Eldoret',
		tour_desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis non mauris et viverra. Sed vel orci elit. Aenean fringilla, ante porttitor semper facilisis, arcu turpis gravida arcu, nec mollis leo tellus a tortor.',
		num_reviews: 10,
		rating: 4,
		duration: 6,
	},
];

function TourScreen({ match }) {
	const { id } = useParams();
	const tour = tours[id - 1];
	return (
		<div>
			<Header />
			<Container>
				<Link className="btn btn-dark my-3" to="/home">
					Go Back
				</Link>
				<Row>
					<Col md={6}>
						<Image src={tour.image} fluid />
					</Col>
					<Col md={6}>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<h2>
									Book <strong>{tour.tour_name}</strong> for {tour.duration}{' '}
									Days
								</h2>
							</ListGroup.Item>
							<ListGroup.Item>
								<h5>{tour.tour_desc}</h5>
							</ListGroup.Item>
							<ListGroup.Item>
								<h5>
									Rating {tour.rating} of {tour.num_reviews} reviews
								</h5>
							</ListGroup.Item>
							<ListGroup.Item>
								<h5>KES {tour.price}</h5>
							</ListGroup.Item>
							<ListGroup.Item>
								<Button
									className="btn btn-block btn-dark w-100"
									type="buttone"
									to="/home"
								>
									Add To Cart
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
}

export default TourScreen;
