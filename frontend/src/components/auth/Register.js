import React, { useState, useEffect } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Alert from 'react-bootstrap/Alert';
import { toast, ToastContainer } from 'react-toastify';
import Loader from '../../components/utils/Loader';
import { register, reset } from '../../features/auth/authSlice';

function Register() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	//Destructure form data
	const { name, email, password, password2 } = formData;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	//Payload from reducer
	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth,
	);

	useEffect(() => {
		if (isError) {
			alert(message);
		}
		if (isSuccess || user) {
			navigate('/home');
		}
		dispatch(reset());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	//Onchange form handler
	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		if (password !== password2) {
			toast.error('Passwords do not match', {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 3000,
			});
		} else {
			const userData = { email, password, password2, name };
			dispatch(register(userData));
		}
		console.log(name);
	};

	if (isLoading) {
		return <Loader />;
	}

	return (
		<div>
			<Container>
				<Row className="vh-100 d-flex justify-content-center align-items-center">
					<Col md={8} lg={6} xs={12}>
						<Card className="px-5">
							<Card.Body>
								<div className="mb-3 mt-md-4">
									<h2 className="fw-bold mb-2 text-center  text-success">
										<img src="/images/tour.ico"></img> Nomadic Tours
									</h2>
									<div className="mb-3">
										{/* Start of form */}
										<Form onSubmit={onSubmit}>
											<Form.Group className="mb-3">
												<Form.Label className="text-center">Name</Form.Label>
												<Form.Control
													type="text"
													placeholder="Name"
													name="name"
													value={name}
													onChange={onChange}
													required
												/>
											</Form.Group>

											<Form.Group className="mb-3">
												<Form.Label className="text-center">
													Email address
												</Form.Label>
												<Form.Control
													type="email"
													placeholder="Email Address"
													name="email"
													value={email}
													onChange={onChange}
													required
												/>
											</Form.Group>

											<Form.Group className="mb-3">
												<Form.Label>Password</Form.Label>
												<Form.Control
													type="password"
													placeholder="Password"
													name="password"
													value={password}
													onChange={onChange}
													required
												/>
											</Form.Group>

											<Form.Group className="mb-3">
												<Form.Label>Confirm Password</Form.Label>
												<Form.Control
													type="password"
													placeholder="Confirm Password"
													name="password2"
													value={password2}
													onChange={onChange}
													required
												/>
											</Form.Group>

											<Form.Group className="mb-3">
												<Form.Check type="checkbox" label="Remember me" />
											</Form.Group>
											{/* Submit button */}
											<div className="d-grid">
												<Button variant="success" type="submit">
													Create Account
												</Button>
											</div>
										</Form>
										{/* End of Form */}
										<div className="mt-3">
											<p className="mb-0  text-center">
												Already have an account?{' '}
												<Link to="/login">Sign In</Link>
											</p>
										</div>
									</div>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
			<ToastContainer />
		</div>
	);
}

export default Register;
