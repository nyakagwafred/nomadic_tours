import mongoose from 'mongoose';

const TourSchema = new mongoose.Schema(
	{
		tour_name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		country: {
			type: String,
			required: true,
		},
		tour_brief: {
			type: String,
		},
		tour_desc: {
			type: String,
		},
		rating: {
			type: Number,
			default: 4,
		},
		num_reviews: {
			type: Number,
			default: 16,
		},
		duration: {
			type: Number,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		},
	},
);

const tourModel = mongoose.model('tour', TourSchema);

export default tourModel;
