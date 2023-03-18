import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

dotenv.config();
const db = process.env.MONGO_URI || 5000;
// Connect to MongoDB
const connectDB = async () => {
	try {
		await mongoose.connect(db);

		console.log('DB Connected'.underline.green);
	} catch (err) {
		console.log('DB Not connected'.red);
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

export default connectDB;
