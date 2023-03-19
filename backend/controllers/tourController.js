import asyncHandler from 'express-async-handler';
import Tour from '../models/tourModel.js';

// @desc    Fetch all tours
// @route   GET /api/tours
// @access  Public
const getTours = asyncHandler(async (req, res) => {
	const pageSize = 10;
	const page = Number(req.query.pageNumber) || 1;

	const keyword = req.query.keyword
		? {
				name: {
					$regex: req.query.keyword,
					$options: 'i',
				},
		  }
		: {};

	const count = await Tour.countDocuments({ ...keyword });
	const tours = await Tour.find({ ...keyword })
		.limit(pageSize)
		.skip(pageSize * (page - 1));

	res.json({ tours, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Fetch single tour
// @route   GET /api/products/:id
// @access  Public
const getTourById = asyncHandler(async (req, res) => {
	const tour = await Tour.findById(req.params.id);

	if (tour) {
		res.json(tour);
	} else {
		res.status(404);
		throw new Error('Tour not found');
	}
});

// @desc    Delete a tour
// @route   DELETE /api/tours/:id
// @access  Private/Admin
const deleteTour = asyncHandler(async (req, res) => {
	const tour = await Tour.findById(req.params.id);

	if (tour) {
		await tour.remove();
		res.json({ message: 'Tour removed' });
	} else {
		res.status(404);
		throw new Error('Tour not found');
	}
});

// @desc    Create a tour
// @route   POST /api/tours
// @access  Private/Admin
const createTour = asyncHandler(async (req, res) => {
	const tour = new Tour({
		name: 'Sample name',
		price: 0,
		user: req.user._id,
		image: '/images/sample.jpg',
		brand: 'Sample brand',
		category: 'Sample category',
		countInStock: 0,
		numReviews: 0,
		description: 'Sample description',
	});

	const createdProduct = await tour.save();
	res.status(201).json(createdProduct);
});

// @desc    Update a tour
// @route   PUT /api/tours/:id
// @access  Private/Admin
const updateTour = asyncHandler(async (req, res) => {
	const { name, price, description, image, brand, category, countInStock } =
		req.body;

	const tour = await Tour.findById(req.params.id);

	if (tour) {
		tour.name = name;
		tour.price = price;
		tour.description = description;
		tour.image = image;
		tour.brand = brand;
		tour.category = category;
		tour.countInStock = countInStock;

		const updatedProduct = await tour.save();
		res.json(updatedProduct);
	} else {
		res.status(404);
		throw new Error('Tour not found');
	}
});

// @desc    Create new review
// @route   POST /api/tours/:id/reviews
// @access  Private
const createTourReview = asyncHandler(async (req, res) => {
	const { rating, comment } = req.body;

	const tour = await Tour.findById(req.params.id);

	if (tour) {
		const alreadyReviewed = tour.reviews.find(
			(r) => r.user.toString() === req.user._id.toString(),
		);

		if (alreadyReviewed) {
			res.status(400);
			throw new Error('Tour already reviewed');
		}

		const review = {
			name: req.user.name,
			rating: Number(rating),
			comment,
			user: req.user._id,
		};

		tour.reviews.push(review);

		tour.numReviews = tour.reviews.length;

		tour.rating =
			tour.reviews.reduce((acc, item) => item.rating + acc, 0) /
			tour.reviews.length;

		await tour.save();
		res.status(201).json({ message: 'Review added' });
	} else {
		res.status(404);
		throw new Error('Tour not found');
	}
});

// @desc    Get top rated tours
// @route   GET /api/tours/top
// @access  Public
const getTopTours = asyncHandler(async (req, res) => {
	const tours = await Tour.find({}).sort({ rating: -1 }).limit(3);

	res.json(tours);
});

export {
	getTours,
	getTourById,
	deleteTour,
	createTour,
	updateTour,
	createTourReview,
	getTopTours,
};
