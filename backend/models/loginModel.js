import mongoose from 'mongoose';

const LoginSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		lastLogin: {
			type: Date,
			default: Date.now,
		},
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		},
	},
);

const loginModel = mongoose.model('user', LoginSchema);

export default loginModel;
