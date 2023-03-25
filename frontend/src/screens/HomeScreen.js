import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import TourCard from './TourCard';
import { toursArray } from '../data/toursStore';
import { CommonStateContext } from '../context/SearchContext';

function HomeScreen() {
	const { searchKeyword } = useContext(CommonStateContext);

	const toursList =
		toursArray &&
		toursArray.filter((tour) => {
			return (
				tour.tour_name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
				!searchKeyword
			);
		});
	console.log(toursList);
	return (
		<>
			{' '}
			<Header />
			<Container>
				<h1 className="text-center mt-5">Tours for you.</h1> <hr />
				<>
					<Row>
						{toursList.map((tour, idx) => {
							return (
								<Col key={idx} sm={12} md={6} lg={4} xl={3}>
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
