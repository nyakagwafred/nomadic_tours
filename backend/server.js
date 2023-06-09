import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
import userRoutes from './routes/userRoutes.js';
import tourRoutes from './routes/tourRoutes.js';
import orderRoutes from './routes/tourRoutes.js';
import path from 'path';

//Initialize express and set environment variables
const app = express();
dotenv.config();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes for user model
app.use('/api/users', userRoutes);
// Routes for tour model
app.use('/api/tours', tourRoutes);

//TODO
//app.use('/api/orders', orderRoutes);

// Serve static assets in production
const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/frontend/build')));

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')),
	);
} else {
	app.get('/', (req, res) => {
		res.send('API is running....');
	});
}
//Environment variable
const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.inverse
			.green,
	),
);
