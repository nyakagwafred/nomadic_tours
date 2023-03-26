import axios from 'axios';

// //Create new tour


//Get Tours
const getTours = async () => {
	const response = await axios.get('/api/tours/');
	return response.data.tours ;
	
};

const tourService = {
	getTours,
	
};

export default tourService;