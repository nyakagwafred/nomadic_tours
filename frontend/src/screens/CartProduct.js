import React from 'react';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { getTourData } from '../data/toursStore';
import moneyFormatter from '../components/utils/CurrencyFormatter';
import { AiFillDelete } from 'react-icons/ai';
import { Container } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function CartProduct(props) {
	const cart = useContext(CartContext);
	const id = props.id;
	const quantity = props.quantity;
	const tourData = getTourData(id);

	return (
		<>
			<Container>
				<Row>
					<Col>
						To {tourData.tour_name}{' '}
						{moneyFormatter.format(quantity * tourData.price)}
					</Col>
					<Col>
						<Button
							variant="danger"
							size="sm"
							onClick={() => cart.deleteFromCart(id)}
						>
							<AiFillDelete />
						</Button>
					</Col>
				</Row>

				<hr></hr>
			</Container>
		</>
	);
}

export default CartProduct;
