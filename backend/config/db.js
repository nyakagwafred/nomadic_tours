import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
//const db = config.get('mongoURI');
const db = process.env.MONGO_URI || 5000;

const connectDB = async () => {
	try {
		await mongoose.connect(db);

		console.log('MongoDB Connected...');
	} catch (err) {
		console.log('DB Not connected');
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

export default connectDB;
