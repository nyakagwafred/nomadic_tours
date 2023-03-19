import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store.js';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/layout/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
			<Footer />
		</Provider>
	</React.StrictMode>,
);
