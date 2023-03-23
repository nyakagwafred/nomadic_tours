import React, { useState, useRef } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

function PayPal() {
	const [paid, setPaid] = React.useState(false);
	const [error, setError] = React.useState(null);
	const paypalRef = React.useRef();

	React.useEffect(() => {
		window.paypal
			.Buttons({
				createOrder: (data, actions) => {
					return actions.order.create({
						intent: 'CAPTURE',
						purchase_units: [
							{
								description: 'Your description',
								amount: {
									currency_code: 'INR',
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
						<h4>Total Amount in KES. : 500 /-</h4>
						<div ref={paypalRef} />
					</Col>
				</Row>
			</Container>
		);
	}
}
export default PayPal;
