import React, { useState, useEffect } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../utils/Loader';
import { login, reset } from '../../features/auth/authSlice';
import Message from '../../components/utils/Message';

function Login() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	//Destructure form data
	const { email, password } = formData;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	//Payload from reducer
	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth,
	);

	useEffect(() => {
		if (isError) {
			toast.error('Invalid credentials. Try Again', {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 8000,
			});
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

	const onSubmit = (e) => {
		e.preventDefault();

		const userData = { email, password };

		dispatch(login(userData));
	};

	if (isLoading) {
		return <Loader />;
	}
	return (
		<div>
			<Container>
				<Row className="vh-100 d-flex justify-content-center align-items-center">
					<Col md={8} lg={6} xs={12}>
						{isError && <Message>Wrong Credentials</Message>}
						<Card className="px-5">
							<Card.Body>
								<div className="mb-3 mt-md-4">
									<h2 className="fw-bold mb-2 text-center  text-success">
										<img src="/images/tour.ico" alt="Nomadic logo"></img>{' '}
										Nomadic Tours
									</h2>
									<div className="mb-3">
										{/* Start of form */}
										<Form onSubmit={onSubmit}>
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

											<Form.Group className="mb-3"></Form.Group>
											{/* Submit button */}
											<div className="d-grid">
												<Button variant="success" type="submit">
													Sign in
												</Button>
											</div>
										</Form>
										{/* End of Form */}
										<div className="mt-3">
											<p className="mb-0  text-center">
												New user? <Link to="/">Register</Link>
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

export default Login;
