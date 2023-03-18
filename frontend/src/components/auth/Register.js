import React from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Register() {
	return (
		<div>
			<Container>
				<Row className="vh-100 d-flex justify-content-center align-items-center">
					<Col md={8} lg={6} xs={12}>
						<Card className="px-4">
							<Card.Body>
								<div className="mb-3 mt-md-4">
									<h2 className="fw-bold mb-2 text-center  text-success">
										<img src="/images/tour.ico"></img> Nomadic Tours
									</h2>
									<div className="mb-3">
										<Form>
											<Form.Group className="mb-3" controlId="Name">
												<Form.Label className="text-center">Name</Form.Label>
												<Form.Control type="text" placeholder="Enter Name" />
											</Form.Group>

											<Form.Group className="mb-3" controlId="formBasicEmail">
												<Form.Label className="text-center">
													Email address
												</Form.Label>
												<Form.Control type="email" placeholder="Enter email" />
											</Form.Group>

											<Form.Group
												className="mb-3"
												controlId="formBasicPassword"
											>
												<Form.Label>Password</Form.Label>
												<Form.Control type="password" placeholder="Password" />
											</Form.Group>
											<Form.Group
												className="mb-3"
												controlId="formBasicPassword"
											>
												<Form.Label>Confirm Password</Form.Label>
												<Form.Control type="password" placeholder="Password" />
											</Form.Group>
											<Form.Group
												className="mb-3"
												controlId="formBasicCheckbox"
											></Form.Group>
											<div className="d-grid">
												<Button variant="success" type="submit">
													Create Account
												</Button>
											</div>
										</Form>
										<div className="mt-3">
											<p className="mb-0  text-center">
												Already have an account??{' '}
												<Link to="/home">Sign In</Link>
											</p>
										</div>
									</div>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Register;
