import React, { Fragment } from 'react';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/components/auth/Login';
import Register from '../src/components/auth/Register';
import TourScreen from './screens/TourScreen';
import PayPal from './payments/PayPal';
import CommonProvider from './context/SearchContext';
import ProductProvider from './context/ProductContext';
import CartProvider from './context/TestCartContext';

function App() {
	return (
		<CartProvider>
			<ProductProvider>
				<CommonProvider>
					<Router>
						<Fragment>
							<Routes>
								<Route path="/" exact element={<Register />} />
								<Route path="/home" exact element={<HomeScreen />} />
								<Route path="/login" exact element={<Login />} />
								<Route path="/paypal" exact element={<PayPal />} />
								<Route path="/tour/:id" exact element={<TourScreen />} />
								<Route path="/cart/:id?" exact element={<TourScreen />} />
							</Routes>
						</Fragment>
					</Router>
				</CommonProvider>
			</ProductProvider>
		</CartProvider>
	);
}

export default App;
