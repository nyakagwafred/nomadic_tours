import React from 'react';
import { Button, Navbar, Modal, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartProduct from '../../screens/CartProduct';
import moneyFormatter from '../utils/CurrencyFormatter';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaUserCheck } from 'react-icons/fa';
import {
	CommonDispatchContext,
	setSearchTour,
	setSearchCategory,
} from '../../context/SearchContext';
import { CartStateContext } from '../../context/TestCartContext';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, reset } from '../../features/auth/authSlice';
import Message from '../utils/Message';

function NavbarComponent() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const commonDispatch = useContext(CommonDispatchContext);
	const [show, setShow] = useState(false);
	const { user } = useSelector((state) => state.auth);
	const { name } = user;
	//Handler functions to handle show/hide cart modal
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	//Handler functions for searching keywords by category and tour products
	const handleTourSearchInput = (event) => {
		console.log(`Tour keyword is ....${event.target.value}`);
		return setSearchTour(commonDispatch, event.target.value);
	};

	const handleCategorySearchInput = (event) => {
		console.log(`Category keyword is ....${event.target.value}`);
		return setSearchCategory(commonDispatch, event.target.value);
	};
	//New context
	//const dispatch = useContext(CartDispatchContext);
	const { tours } = useContext(CartStateContext);
	//Cart items calculations
	const tourCountInCart = tours.length;
	const totalPrice = tours.reduce(
		(sum, tour) => sum + tour.price * tour.people,
		0,
	);

	const handleLogout = () => {
		dispatch(logout());
		dispatch(reset());
		navigate('/login');
	};

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
						name="email"
						//value={tourKeyword}
						onChange={handleTourSearchInput}
					/>
				</Form>
				<Form className="d-flex">
					<Form.Control
						type="search"
						placeholder="Search tour categories"
						className="me-2"
						aria-label="#"
						name="email"
						onChange={handleCategorySearchInput}
					/>
				</Form>

				<Navbar.Collapse className="justify-content-end">
					<Button onClick={handleShow} variant="outline-success">
						<AiOutlineShoppingCart onClick={handleShow} /> {tourCountInCart}{' '}
						tour(s)
					</Button>
				</Navbar.Collapse>

				<Navbar.Collapse className="justify-content-center ">
					<Link to="/login" onClick={handleLogout} className="text-success">
						Sign out
					</Link>
				</Navbar.Collapse>

				<Navbar.Collapse>
					<Navbar.Text className="text-light">
						<FaUserCheck />
						{'    '}
						<a href="/home" className="text-success">
							{name}
						</a>
					</Navbar.Text>
				</Navbar.Collapse>
			</Navbar>
			<hr></hr>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>
						<Message variant="success">
<<<<<<< HEAD
							Your Shopping Cart. Review and update
=======
							Tours Booked - Review and Update
>>>>>>> update-Items-cart-23
						</Message>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{tours.length > 0 ? (
						<>
<<<<<<< HEAD
							{cart.items.map((currentProduct, idx) => (
								<CartProduct
									key={idx}
									id={currentProduct.id}
									quantity={currentProduct.quantity}
								></CartProduct>
=======
							{tours.map((tour, idx) => (
								<CartProduct key={idx} tour={tour} tours={tours} />
>>>>>>> update-Items-cart-23
							))}

							<h5>
								Total: {moneyFormatter.format(totalPrice)} for {tourCountInCart}{' '}
								tour(s)
							</h5>
							<hr></hr>

<<<<<<< HEAD
							<Row>
								<Col>
									<Link to="/paypal">
										<button
											type="button"
											style={{
												alignItems: 'center',
												width: '100%',
												marginHorizontal: 20,
											}}
											className="btn btn-success"
										>
											Proceed to checkout
										</button>
									</Link>
								</Col>
								<Col>
									<Link to="/home" onClick={handleClose}>
										<button
											type="button"
											style={{
												alignItems: 'center',
												width: '100%',
												marginHorizontal: 20,
											}}
											className="btn btn-dark"
										>
											Add more tours
										</button>
									</Link>
								</Col>
							</Row>
						</>
					) : (
						<Message>
							No items in your cart. Check the listings and book your tour.
=======
							<Link to="/paypal">
								<button
									type="button"
									style={{
										alignItems: 'center',
										width: '100%',
										marginHorizontal: 20,
									}}
									className="btn btn-success"
								>
									Proceed to checkout
								</button>
							</Link>
						</>
					) : (
						<Message>
							There are no items in your cart! Check the listing and book a
							trip.
>>>>>>> update-Items-cart-23
						</Message>
					)}
				</Modal.Body>
			</Modal>
		</>
	);
}

export default NavbarComponent;
