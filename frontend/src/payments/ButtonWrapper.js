import React, { useEffect } from 'react';
import { useContext } from 'react';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { CartStateContext } from '../context/TestCartContext';

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }) => {
	const { tours } = useContext(CartStateContext);
	// This values are the props in the UI
	const amount =
		tours.reduce((sum, tour) => sum + tour.price * tour.people, 0) / 100;

	const style = { layout: 'vertical' };
	// usePayPalScriptReducer can be use only inside children of PayPalScriptProviders

	const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

	useEffect(() => {
		dispatch({
			type: 'resetOptions',
			value: {
				...options,
				currency: currency,
			},
		});
	}, [currency, showSpinner]);

	return (
		<>
			{showSpinner && isPending && <div className="spinner" />}
			<PayPalButtons
				style={style}
				disabled={false}
				forceReRender={[amount, currency, style]}
				fundingSource={undefined}
				createOrder={(data, actions) => {
					return actions.order
						.create({
							purchase_units: [
								{
									amount: {
										currency_code: currency,
										value: amount,
									},
								},
							],
						})
						.then((orderId) => {
							// Your code here after create the order
							return orderId;
						});
				}}
				onApprove={function(data, actions) {
					return actions.order.capture().then(function() {
						// Your code here after capture the order
					});
				}}
			/>
		</>
	);
};

export default ButtonWrapper;
