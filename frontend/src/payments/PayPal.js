import React from 'react';

import { Col, Row, Container } from 'react-bootstrap';
import moneyFormatter from '../components/utils/CurrencyFormatter';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ButtonWrapper from './ButtonWrapper';
import { Link } from 'react-router-dom';

function PayPal() {
	const cart = useContext(CartContext);

	return (
		<Container>
			<Row className="vh-100 d-flex justify-content-center align-items-center">
				<Col md={8} lg={6} xs={12}>
					<h4 className="text-center">
						Total Amount is: {moneyFormatter.format(cart.getTotalCost())} OR USD{' '}
						{cart.getTotalCost() > 0
							? (cart.getTotalCost() / 100).toFixed(2)
							: '0.00'}
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
