import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import Tour from '../components/Tour';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Loader from '../components/utils/Loader';
import Message from '../components/utils/Message';
import { getTours, reset } from '../../src/features/tour/tourSlice';
import { useNavigate } from 'react-router-dom';

function HomeScreen() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { user } = useSelector((state) => state.auth);
	const tourList = useSelector((state) => state.tour);
	const { tours, isError, isSuccess, isLoading, message } = tourList;

	useEffect(() => {
		if (isError) {
			console.log(message);
		}

		if (!user) {
			navigate('/login');
		}
		dispatch(getTours());
		// return () => {
		// 	dispatch(reset());
		// };
	}, []);

	return (
		<>
			{' '}
			<Header />
			<Container>
				<h1 className="text-center">Tours for you.</h1> <hr />
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
