import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import moneyFormatter from '../components/utils/CurrencyFormatter';
import { useContext } from 'react';
import ButtonWrapper from './ButtonWrapper';
import { Link } from 'react-router-dom';
import { CartStateContext } from '../context/TestCartContext';

function PayPal() {
	const { tours } = useContext(CartStateContext);
	const amount = tours.reduce((sum, tour) => sum + tour.price * tour.people, 0);

	return (
		<Container>
			<Row className="vh-100 d-flex justify-content-center align-items-center">
				<Col md={8} lg={6} xs={12}>
					<h4 className="text-center">
						Total Amount is: {moneyFormatter.format(amount)} OR USD{' '}
						{amount > 0 ? (amount / 100).toFixed(2) : '0.00'}
					</h4>
					<ButtonWrapper currency={'USD'} showSpinner={false} />
					<Link className="text-center" to="/home">
						Back to listing
					</Link>
				</Col>
			</Row>
		</Container>
	);
}

export default PayPal;
