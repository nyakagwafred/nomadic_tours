import React from 'react';
import { Button, Navbar, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartProduct from '../../screens/CartProduct';
import moneyFormatter from '../utils/CurrencyFormatter';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GoSignOut } from 'react-icons/go';
import { AiOutlineSearch } from 'react-icons/ai';
import {
	CommonDispatchContext,
	setSearchKeyword,
} from '../../context/SearchContext';

function NavbarComponent() {
	const cart = useContext(CartContext);
	const commonDispatch = useContext(CommonDispatchContext);
	const [show, setShow] = useState(false);
	//Header click and input handler functions
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const handleSearchInput = (event) => {
		return setSearchKeyword(commonDispatch, event.target.value);
	};

	const toursCount = cart.items.reduce((sum, tour) => sum + tour.quantity, 0);

	const toursBooked = cart.items.length;

	return (
		<>
			<Navbar fixed="top" bg="dark" expand="sm">
				<Navbar.Brand href="/" className="me-5"></Navbar.Brand>
				<Form className="d-flex me-5">
					<Form.Control
						type="search"
						placeholder="Search tours"
						className="me-2"
						aria-label="#"
						onChange={handleSearchInput}
					/>
				</Form>
				<Form className="d-flex">
					<Form.Control
						type="search"
						placeholder="Search tour categories"
						className="me-2"
						aria-label="#"
						onChange={handleSearchInput}
					/>
				</Form>
				{/* <Navbar.Toggle /> */}

				<Navbar.Collapse className="justify-content-end">
					<Button onClick={handleShow}>
						<AiOutlineShoppingCart onClick={handleShow} /> {toursBooked} tour(s)
					</Button>
				</Navbar.Collapse>

				<Navbar.Collapse className="justify-content-center">
					<Link to="/login">
						<GoSignOut />
					</Link>
				</Navbar.Collapse>

				<Navbar.Collapse>
					<Navbar.Text className="text-light">
						Signed in as:{' '}
						<a href="#" className="text-danger">
							Mark Otto
						</a>
					</Navbar.Text>
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

							<Link to="/paypal">
								<button type="button" className="btn btn-success">
									Proceed to payment
								</button>
							</Link>
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
