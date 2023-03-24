import React, { useEffect } from 'react';
import { useContext } from 'react';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { CartContext } from '../context/CartContext';

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }) => {
	const cart = useContext(CartContext);
	// This values are the props in the UI
	const amount = cart.getTotalCost() / 100;

	const style = { layout: 'vertical' };
	// usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
	// This is the main reason to wrap the PayPalButtons in a new component
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
