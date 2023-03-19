import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
import userRoutes from './routes/userRoutes.js';
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
app.get('/', (req, res) => {
	res.send('API is running');
});

// Serve static assets in production
const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.inverse
			.red,
	),
);
