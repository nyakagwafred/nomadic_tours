import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Tour from '../components/Tour';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

let tours = [
	{
		id: 1,
		price: 2000,
		image: '/images/cheetah.jpg',
		country: 'Kenya',
		tour_name: 'Nanyuki',
		tour_desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis non mauris et viverra. Sed vel orci elit. Aenean fringilla, ante porttitor semper facilisis, arcu turpis gravida arcu, nec mollis leo tellus a tortor.',
		num_reviews: 10,
		rating: 4,
		duration: 20,
	},
	{
		id: 2,
		price: 3000,
		image: '/images/ballon.jpg',
		country: 'Kenya',
		tour_name: 'Kisii',
		tour_desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis non mauris et viverra. Sed vel orci elit. Aenean fringilla, ante porttitor semper facilisis, arcu turpis gravida arcu, nec mollis leo tellus a tortor.',
		num_reviews: 7,
		rating: 3,
		duration: 9,
	},
	{
		id: 3,
		price: 4000,
		image: '/images/tree.jpg',
		country: 'Kenya',
		tour_name: 'Mombasa',
		tour_desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis non mauris et viverra. Sed vel orci elit. Aenean fringilla, ante porttitor semper facilisis, arcu turpis gravida arcu, nec mollis leo tellus a tortor.',
		num_reviews: 8,
		rating: 3,
		duration: 5,
	},
	{
		id: 4,
		price: 5000,
		image: '/images/van.jpg',
		country: 'Kenya',
		tour_name: 'Eldoret',
		tour_desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis non mauris et viverra. Sed vel orci elit. Aenean fringilla, ante porttitor semper facilisis, arcu turpis gravida arcu, nec mollis leo tellus a tortor.',
		num_reviews: 10,
		rating: 4,
		duration: 6,
	},
];

function HomeScreen() {
	return (
		<>
			{' '}
			<Header />
			<Container>
				<h1 className="text-center">Available Tours</h1> <hr />
				<Row>
					{tours.map((tour) => {
						return (
							<Col sm={12} md={6} lg={4} xl={3}>
								<Tour tour={tour} />
							</Col>
						);
					})}
				</Row>
			</Container>
			<Footer />
		</>
	);
}

export default HomeScreen;
