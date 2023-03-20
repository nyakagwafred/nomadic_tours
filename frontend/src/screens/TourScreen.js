import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getTours } from '../../src/features/tour/tourSlice';

function TourScreen({ match }) {
	const { id } = useParams();

	const dispatch = useDispatch();

	const tourList = useSelector((state) => state.tour);
	const { tours, isError, isSuccess, isLoading, message } = tourList;

	useEffect(() => {
		dispatch(getTours());
	}, [dispatch]);

	// if (isSuccess) {
	// 	const TOUR = tours.find((e) => e._id === id);
	// 	console.log(TOUR._id);
	// } else {
	// 	console.log('Not Found');
	// }

	return (
		<div>
			<Header />
			<Container>
				<Link className="btn btn-dark my-3" to="/home">
					Go Back
				</Link>
				<Row>
					{/* <Col md={6}>
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
					</Col> */}
				</Row>
			</Container>
			<Footer />
		</div>
	);
}

export default TourScreen;
