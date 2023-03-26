import React, { useContext } from 'react';
import TourCard from './TourCard';
import { Row, Col } from 'react-bootstrap';
import { toursArray } from '../data/ToursStore';
import { CommonStateContext } from '../context/SearchContext';
import Message from '../components/utils/Message';

function CategorySearch() {
	const { searchCategory } = useContext(CommonStateContext);

	let toursList =
		toursArray &&
		toursArray.filter((tour) => {
			return (
				tour.category.toLowerCase().includes(searchCategory.toLowerCase()) ||
				!searchCategory
			);
		});

	if (toursList == 0) {
		return (
			<>
				<h1 className="vh-100 d-flex justify-content-center align-items-center">
					<Message>
						No tour categories in this search. Try again with a different
						keyword.
					</Message>
				</h1>
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

export default CategorySearch;
