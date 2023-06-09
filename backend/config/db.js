import mongoose from 'mongoose';
import dotenv from 'dotenv';
//import colors from 'colors';

dotenv.config();
//Mongo DB connection string
const db = process.env.MONGO_URI;
// Connect to MongoDB
const connectDB = async () => {
	try {
		await mongoose.connect(db);

		console.log('DB Connected'.underline.inverse.green);
	} catch (err) {
		//Check for any DB errors in development
		console.log('DB not connected'.inverse.red);
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

export default connectDB;
