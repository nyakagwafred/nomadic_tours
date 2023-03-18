import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import 'Header.css';

function Header() {
	return (
		<>
			<Navbar bg="dark" expand="lg">
				<Container fluid>
					<Navbar.Brand href="#" className="text-success">
						Nomadic Tours
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: '100px' }}
							navbarScroll
						>
							<Nav.Link href="#action1" className="text-light">
								Home
							</Nav.Link>
							<Nav.Link href="#action1" className="text-light" href="#">
								Safari
							</Nav.Link>
							<Nav.Link href="#action1" className="text-light" href="#">
								Learn
							</Nav.Link>
							{/* <NavDropdown title="Another Link" id="navbarScrollingDropdown">
								<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action5">
									Something else here
								</NavDropdown.Item>
							</NavDropdown> */}
						</Nav>
						<Form className="d-flex">
							<Form.Control
								type="search"
								placeholder="Search tours"
								className="me-2"
								aria-label="Search"
							/>
							<Button variant="outline-success">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<br />
		</>
	);
}

export default Header;
