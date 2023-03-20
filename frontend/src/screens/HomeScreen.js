import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import Tour from '../components/Tour';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Loader from '../components/utils/Loader';
import Message from '../components/utils/Message';
import { getTours } from '../../src/features/tour/tourSlice';

function HomeScreen() {
	const dispatch = useDispatch();

	const tourList = useSelector((state) => state.tour);
	const { tours, isError, isSuccess, isLoading, message } = tourList;

	useEffect(() => {
		dispatch(getTours());
	}, [dispatch]);

	return (
		<>
			{' '}
			<Header />
			<Container>
				<h1 className="text-center">Available Tours</h1> <hr />
				{isLoading ? (
					<Loader />
				) : isError ? (
					<Message variant="danger">Sorry! Try to reload.</Message>
				) : (
					<>
						<Row>
							{tours.map((tour) => {
								return (
									<Col key={tour._id} sm={12} md={6} lg={4} xl={3}>
										<Tour tour={tour} />
									</Col>
								);
							})}
						</Row>
					</>
				)}
			</Container>
			<Footer />
		</>
	);
}

export default HomeScreen;
