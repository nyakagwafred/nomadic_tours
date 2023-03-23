import React from 'react';
import { Button, Container, Navbar, Modal, Form } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartProduct from '../../screens/CartProduct';
import moneyFormatter from '../utils/CurrencyFormatter';

function NavbarComponent() {
	const cart = useContext(CartContext);

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	// const checkout = async () => {
	// 	await fetch('http://localhost:4000/checkout', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify({ items: cart.items }),
	// 	})
	// 		.then((response) => {
	// 			return response.json();
	// 		})
	// 		.then((response) => {
	// 			if (response.url) {
	// 				window.location.assign(response.url); // Forwarding user to Stripe
	// 			}
	// 		});
	// };
	function checkout() {
		console.log('Checking out....');
	}

	const toursCount = cart.items.reduce((sum, tour) => sum + tour.quantity, 0);

	const toursBooked = cart.items.length;

	return (
		<>
			<Navbar expand="sm">
				<Navbar.Brand href="/" className="me-5"></Navbar.Brand>
				<Form className="d-flex">
					<Form.Control
						type="search"
						placeholder="Search tours"
						className="me-2"
						aria-label="#"
					/>
					<Button variant="outline-success">Search</Button>
				</Form>
				<Form className="d-flex">
					<Form.Control
						type="search"
						placeholder="Search tour categories"
						className="me-2"
						aria-label="#"
					/>
					<Button variant="outline-success">Search</Button>
				</Form>
				{/* <Navbar.Toggle /> */}

				<Navbar.Collapse className="justify-content-end">
					<Button onClick={handleShow}>View Cart ({toursBooked} Items)</Button>
				</Navbar.Collapse>
				<Navbar.Collapse className="justify-content-center">
					<Button variant="link">Sign out</Button>
				</Navbar.Collapse>
			</Navbar>
			<hr></hr>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Shopping Cart</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{toursCount > 0 ? (
						<>
							<h2>Tours in your cart:</h2>
							<hr></hr>
							{cart.items.map((currentProduct, idx) => (
								<CartProduct
									key={idx}
									id={currentProduct.id}
									quantity={currentProduct.quantity}
								></CartProduct>
							))}

							<h5>
								Total: {moneyFormatter.format(cart.getTotalCost())} for{' '}
								{toursBooked} tour(s)
							</h5>
							<hr></hr>

							<Button variant="success" onClick={checkout}>
								Proceed to Payment!
							</Button>
						</>
					) : (
						<h2 className="text-danger">There are no items in your cart!</h2>
					)}
				</Modal.Body>
			</Modal>
		</>
	);
}

export default NavbarComponent;
