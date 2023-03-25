import React from 'react';
import { Container, Badge } from 'react-bootstrap';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toursArray } from '../data/toursStore';
import { useParams } from 'react-router-dom';
import moneyFormatter from '../components/utils/CurrencyFormatter';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function TourScreen({}) {
	const { id } = useParams();
	const tour = toursArray.find((element) => element.id == id);
	const cart = useContext(CartContext);
	const tourQuantity = cart.getTourQuantity(tour.id);
	return (
		<div>
			<Header />
			<Container className="mt-5">
				<Row>
					<Col md={6}>
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
