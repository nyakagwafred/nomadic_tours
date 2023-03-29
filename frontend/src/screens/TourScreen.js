import React, { useState } from 'react';
import { Container, Badge } from 'react-bootstrap';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toursArray } from '../data/ToursStore';
import { useParams } from 'react-router-dom';
import moneyFormatter from '../components/utils/CurrencyFormatter';
import { useContext } from 'react';

import {
	CartDispatchContext,
	CartStateContext,
	addToCart,
	removeFromCart,
} from '../context/TestCartContext';
import { useLocation } from 'react-router-dom';

function TourScreen({ tour }) {
	// const { id } = useParams();
	// const dispatch = useContext(CartDispatchContext);
	// const { tours } = useContext(CartStateContext);
	// const tour = toursArray.find((tour) => tour.id == id);
	// const { _id, people, tour_name, duration, price, country } = tour;

	// const [isAdded, setIsAdded] = useState(false);
	// console.log(id);

	// const handleAddToCart = () => {
	// 	const product = { ...tour, people: 1 };
	// 	addToCart(dispatch, product);
	// 	setIsAdded(true);
	// };

	// const handleRemoveFromCart = () => {
	// 	removeFromCart(dispatch, _id);
	// 	setIsAdded(false);
	//};

	const location = useLocation();
	console.log();
	//console.log(location.state.fromBlogRoll);

	return (
		<div>
			<Header />
			<Container className="mt-5">
				<Row>
					<h3>Tour screen {tour.price}</h3>
					{/* <Col md={6}>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<Image src={tour.image} fluid />
							</ListGroup.Item>
							<ListGroup.Item>
								<Link className="btn btn-dark " to="/home">
									Back to Tour List
								</Link>
							</ListGroup.Item>
						</ListGroup>
					</Col>

					<Col md={6}>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<h2>
									Book <strong>{tour.tour_name}</strong> for {tour.duration}{' '}
									Days <Badge bg="success">{tour.category}</Badge>
								</h2>
							</ListGroup.Item>
							<ListGroup.Item>
								<h5>
									Country: <Badge bg="success">{tour.country}</Badge>
								</h5>
							</ListGroup.Item>
							<ListGroup.Item>
								<h5>{tour.tour_brief}</h5>
							</ListGroup.Item>
							<ListGroup.Item>
								<h5>
									Rating {tour.rating} of {tour.num_reviews} reviews
								</h5>
							</ListGroup.Item>
							<ListGroup.Item>
								<h5>{moneyFormatter.format(tour.price)}</h5>
							</ListGroup.Item>
							<ListGroup.Item>
								{isAdded ? (
									<>
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
									</>
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
