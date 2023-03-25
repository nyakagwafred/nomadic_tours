import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Login from '../../src/components/auth/Login';
import TourSearch from './TourSearch';
import CategorySearch from './CategorySearch';
import { CommonStateContext } from '../context/SearchContext';
import { useSelector } from 'react-redux';

function HomeScreen() {
	const { isSearchTour } = useContext(CommonStateContext);
	const { user } = useSelector((state) => state.auth);

	if (user) {
		return (
			<>
				<Header />
				<Container>
					{isSearchTour ? <TourSearch /> : <CategorySearch />}
				</Container>
				<Footer />
			</>
		);
	}

	return (
		<>
			<Login />
		</>
	);
}

export default HomeScreen;
