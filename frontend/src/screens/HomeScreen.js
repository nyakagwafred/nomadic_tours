import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
//import Tour from '../screens/Tour';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
//import { toursArray } from '../data/toursStore';
import TourCard from './TourCard';
import { toursArray } from '../data/toursStore';
import { FaBeer } from 'react-icons/fa';

function HomeScreen() {
	// const cart = useContext(CartContext);
	// console.log(cart.items);

	return (
		<>
			{' '}
			<Header />
			<Container>
				<h1 className="text-center mt-5">Tours for you.</h1> <hr />
				<>
					<Row>
						{toursArray.map((tour, idx) => {
							return (
								<Col key={tour.id} sm={12} md={6} lg={4} xl={3}>
									<TourCard tour={tour} />
								</Col>
							);
						})}
					</Row>
				</>
			</Container>
			<Footer />
		</>
	);
}

export default HomeScreen;
