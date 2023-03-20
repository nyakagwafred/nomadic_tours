import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
	const navigate = useNavigate();
	const onLogout = () => {
		navigate('/login');
	};
	return (
		<>
			<Navbar bg="dark" expand="lg">
				<Container fluid>
					<Navbar.Brand>
						<Link
							to="/home"
							className="text-monospace text-decoration-none text-success"
						>
							NOMADIC <span style={{ color: 'red' }}>TOURS</span>
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: '100px' }}
							navbarScroll
						>
							{/* <Nav.Link href="#action1" className="text-light">
								Safari
							</Nav.Link>
							<Nav.Link href="#action1" className="text-light">
								Learn
							</Nav.Link> */}
						</Nav>
						<Form className="d-flex">
							<Form.Control
								type="search"
								placeholder="Search tours"
								className="me-2"
								aria-label="Search"
							/>
							<Button variant="outline-success" className="me-3">
								Search
							</Button>
						</Form>
						<Button variant="outline-danger" onClick={onLogout}>
							Sign Out
						</Button>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<br />
		</>
	);
}

export default Header;
