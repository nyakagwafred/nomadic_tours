import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import tours from './data/tours.js';
import User from './models/userModel.js';
import Tour from './models/tourModel.js';
//import Order from './models/orderModel.js'
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
	try {
		//await Order.deleteMany();
		await Tour.deleteMany();
		await User.deleteMany();

		const createdUsers = await User.insertMany(users);

		const adminUser = createdUsers[0]._id;

		const sampleTours = tours.map((product) => {
			return { ...product, user: adminUser };
		});

		await Tour.insertMany(sampleTours);

		console.log('Data Imported!'.green.inverse);
		process.exit();
	} catch (error) {
		console.error(`${error}`.red.inverse);
		process.exit(1);
	}
};

const destroyData = async () => {
	try {
		//await Order.deleteMany();
		await Tour.deleteMany();
		//await User.deleteMany();

		console.log('Data Destroyed!'.red.inverse);
		process.exit();
	} catch (error) {
		console.error(`${error}`.red.inverse);
		process.exit(1);
	}
};

if (process.argv[2] === '-d') {
	destroyData();
} else {
	importData();
}
