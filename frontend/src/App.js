import React, { Fragment } from 'react';
import HomeScreen from './screens/HomeScreen';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/components/auth/Login';
import Register from '../src/components/auth/Register';
import TourScreen from './screens/TourScreen';

function App() {
	return (
		<Router>
			<Fragment>
				<Routes>
					<Route path="/" exact element={<Register />} />
					<Route path="/home" exact element={<HomeScreen />} />
					<Route path="/login" exact element={<Login />} />
					<Route path="/tour/:id" exact element={<TourScreen />} />
				</Routes>
			</Fragment>
		</Router>
	);
}

export default App;
