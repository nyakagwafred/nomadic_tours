import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import TourSearch from './TourSearch';
import CategorySearch from './CategorySearch';
import { CommonStateContext } from '../context/SearchContext';

function HomeScreen() {
	const {
		searchCategory,
		searchTour,
		isSearchTour,
		isSearchCategory,
	} = useContext(CommonStateContext);
	console.log(`Category keyword is ....${searchCategory}`);
	console.log(`Tour keyword is ....${searchTour}`);
	console.log(`Search tour? ....${isSearchTour}`);
	console.log(`Search category? ....${isSearchCategory}`);

	// let toursList =
	// 	toursArray &&
	// 	toursArray.filter((tour) => {
	// 		return (
	// 			tour.tour_name.toLowerCase().includes(searchTour.toLowerCase()) ||
	// 			!searchTour
	// 		);
	// 	});

	return (
		<>
			{' '}
			<Header />
			<Container>
				{isSearchTour ? <TourSearch /> : <CategorySearch />}
			</Container>
			<Footer />
		</>
	);
}

export default HomeScreen;
