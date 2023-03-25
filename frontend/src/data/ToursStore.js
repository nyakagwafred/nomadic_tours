import { uuid } from 'uuidv4';
const toursArray = [
	{
		id: 1,
		price: 2000,
		image: '/images/cheetah.jpg',
		country: 'Kenya',
		tour_name: 'Nanyuki',
		tour_brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		tour_desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis non mauris et viverra. Sed vel orci elit. Aenean fringilla, ante porttitor semper facilisis, arcu turpis gravida arcu, nec mollis leo tellus a tortor.',
		num_reviews: 10,
		rating: 4,
		duration: 20,
		category: ' Mountain',
	},
	{
		id: 2,
		price: 3000,
		image: '/images/ballon.jpg',
		country: 'Kenya',
		tour_name: 'Kisii',
		tour_brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		tour_desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis non mauris et viverra. Sed vel orci elit. Aenean fringilla, ante porttitor semper facilisis, arcu turpis gravida arcu, nec mollis leo tellus a tortor.',
		num_reviews: 7,
		rating: 3,
		duration: 9,
		category: 'Savanna',
	},
	{
		id: 3,
		price: 4000,
		image: '/images/tree.jpg',
		country: 'Kenya',
		tour_name: 'Mombasa',
		tour_brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		tour_desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis non mauris et viverra. Sed vel orci elit. Aenean fringilla, ante porttitor semper facilisis, arcu turpis gravida arcu, nec mollis leo tellus a tortor.',
		num_reviews: 8,
		rating: 3,
		duration: 5,
		category: 'Mountains',
	},
	{
		id: 4,
		price: 5000,
		image: '/images/van.jpg',
		country: 'Kenya',
		tour_name: 'Eldoret',
		tour_brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		tour_desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis non mauris et viverra. Sed vel orci elit. Aenean fringilla, ante porttitor semper facilisis, arcu turpis gravida arcu, nec mollis leo tellus a tortor.',
		num_reviews: 10,
		rating: 4,
		duration: 6,
		category: 'Ocean and Lakes',
	},
	{
		id: 5,
		price: 10000,
		image: '/images/van.jpg',
		country: 'Uganda',
		tour_name: 'Kampala',
		tour_brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		tour_desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis non mauris et viverra. Sed vel orci elit. Aenean fringilla, ante porttitor semper facilisis, arcu turpis gravida arcu, nec mollis leo tellus a tortor.',
		num_reviews: 12,
		rating: 2,
		duration: 4,
		category: 'Ocean and Lakes',
	},
	{
		id: 6,
		price: 5000,
		image: '/images/tree.jpg',
		country: 'Tanzania',
		tour_name: 'Arusha',
		tour_brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		tour_desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis non mauris et viverra. Sed vel orci elit. Aenean fringilla, ante porttitor semper facilisis, arcu turpis gravida arcu, nec mollis leo tellus a tortor.',
		num_reviews: 29,
		rating: 5,
		duration: 10,
		category: 'Ocean and Lakes',
	},
	{
		id: 7,
		price: 25000,
		image: '/images/van.jpg',
		country: 'Tanzania',
		tour_name: 'Zanzibar',
		tour_brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		tour_desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis non mauris et viverra. Sed vel orci elit. Aenean fringilla, ante porttitor semper facilisis, arcu turpis gravida arcu, nec mollis leo tellus a tortor.',
		num_reviews: 40,
		rating: 5,
		duration: 6,
		category: 'Ocean and Lakes',
	},
	{
		id: 8,
		price: 5000,
		image: '/images/ballon.jpg',
		country: 'Kenya',
		tour_name: 'Marsabit',
		tour_brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		tour_desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis non mauris et viverra. Sed vel orci elit. Aenean fringilla, ante porttitor semper facilisis, arcu turpis gravida arcu, nec mollis leo tellus a tortor.',
		num_reviews: 2,
		rating: 2,
		duration: 2,
		category: 'Mountain',
	},
];

function getTourData(id) {
	let tourData = toursArray.find((tour) => tour.id === id);

	if (tourData === undefined) {
		console.log('Tour data does not exist for ID: ' + id);
		return undefined;
	}

	return tourData;
}

export { toursArray, getTourData };
