import React, { useState, useRef, useEffect } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import moneyFormatter from '../components/utils/CurrencyFormatter';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function PayPal() {
	const [paid, setPaid] = useState(false);
	const [error, setError] = useState(null);
	const paypalRef = useRef();
	const cart = useContext(CartContext);
	const toursBooked = cart.items.length;

	useEffect(() => {
		window.paypal
			.Buttons({
				createOrder: (data, actions) => {
					return actions.order.create({
						intent: 'CAPTURE',
						purchase_units: [
							{
								description: 'Your description',
								amount: {
									currency_code: cart.getTotalCost(),
									value: 500.0,
								},
							},
						],
					});
				},
				onApprove: async (data, actions) => {
					const order = await actions.order.capture();
					setPaid(true);
					console.log(order);
				},
				onError: (err) => {
					//   setError(err),
					console.error(err);
				},
			})
			.render(paypalRef.current);
	}, []);

	// If the payment has been made
	if (paid) {
		return <div>Payment successful.!</div>;
	}

	// If any error occurs
	if (error) {
		return <div>Error Occurred in processing payment.! Please try again.</div>;
	}

	{
		return (
			<Container>
				<Row className="vh-100 d-flex justify-content-center align-items-center">
					<Col md={8} lg={6} xs={12}>
						<h4 className="text-center">
							Total Amount is: {moneyFormatter.format(cart.getTotalCost())}
						</h4>
						<div ref={paypalRef} />
					</Col>
				</Row>
			</Container>
		);
	}
}
export default PayPal;
