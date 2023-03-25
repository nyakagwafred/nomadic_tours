import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store.js';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider from './context/CartContext.js';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'react-tooltip/dist/react-tooltip.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<PayPalScriptProvider>
			<Provider store={store}>
				<CartProvider
					options={{
						'client-id':
							'AYqrUTC8nzBdVTPfrj_xHwoxSuDZzRnfWtjZzcnJ64J3Td8gyHMBO5TJIVHviaX2fkAK33Hm6XPhboxj',
						'components': 'buttons',
						'currency': 'USD',
					}}
				>
					<App />
				</CartProvider>
			</Provider>
		</PayPalScriptProvider>
	</React.StrictMode>,
);
