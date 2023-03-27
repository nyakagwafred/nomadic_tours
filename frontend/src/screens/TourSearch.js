import React, { useContext } from 'react';
import TourCard from './TourCard';
import { Row, Col, Container } from 'react-bootstrap';
import { toursArray } from '../data/ToursStore';
import { CommonStateContext } from '../context/SearchContext';
import Message from '../components/utils/Message';

function TourSearch() {
	const { searchTour } = useContext(CommonStateContext);

	let toursList =
		toursArray &&
		toursArray.filter((tour) => {
			return (
				tour.tour_name.toLowerCase().includes(searchTour.toLowerCase()) ||
				!searchTour
			);
		});
	if (toursList == 0) {
		return (
			<>
				<Container>
					<Row className="vh-100 d-flex justify-content-center align-items-center">
						<Col md={8} lg={6} xs={12}>
							<Message>
								No results in this search. Try with another keyword.
							</Message>
						</Col>
					</Row>
				</Container>
			</>
		);
	}

	return (
		<>
			<>
				<h1 className="text-center mt-5">Tours for you.</h1> <hr />
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
		</>
	);
}

export default TourSearch;
