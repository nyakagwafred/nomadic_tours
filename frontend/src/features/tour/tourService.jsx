import axios from 'axios';

//Create new tour
const createTour = async (loanData, token) => {
	const config = {
		headers: {
			Authorization: `${token}`,
		},
	};
	const response = await axios.post('/api/tours/new', loanData, config);

	return response.data;
};

// Get Tours
const getTours = async () => {
	const response = await axios.get('/api/tours/');
	return response.data.tours ;
	
};

// Delete user loan
const deleteTour = async (loanId, token) => {
	const config = {
		headers: {
			Authorization: `${token}`,
		},
	};

	const response = await axios.delete(`/api/tours/${loanId}`, config);

	return response.data;
};

// Update loan
const updateTour = async (updateData, token) => {
	const { formData, id } = updateData;

	const config = {
		headers: {
			Authorization: `${token}`,
		},
	};
	const response = await axios.put(`/api/tours/${id}`, formData, config);
	return response.data;
};

const tourService = {
	createTour,
	getTours,
	deleteTour,
	updateTour,
};

export default tourService;