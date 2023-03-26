import React, { useEffect, useContext } from 'react';
import TourCard from './TourCard';
import { Row, Col } from 'react-bootstrap';
//import { products } from '../data/ToursStore';
import { CommonStateContext } from '../context/SearchContext';
import Message from '../components/utils/Message';

import {
	ProductsStateContext,
	ProductsDispatchContext,
	getProducts,
} from '../context/ProductContext';

function TourSearch() {
	const { searchTour } = useContext(CommonStateContext);
	const { products, isLoading, isLoaded } = useContext(ProductsStateContext);
	const dispatch = useContext(ProductsDispatchContext);

	let toursList =
		products &&
		products.filter((tour) => {
			return (
				tour.tour_name.toLowerCase().includes(searchTour.toLowerCase()) ||
				!searchTour
			);
		});

	useEffect(() => {
		getProducts(dispatch);
	}, []);

	console.log(products[0]);

	if (toursList == 0) {
		return (
			<>
				<h1 className="vh-100 d-flex justify-content-center align-items-center">
					<Message>
						No tour search results. Try again with different keywords
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

export default TourSearch;
