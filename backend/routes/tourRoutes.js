import express from 'express';
const router = express.Router();
import {
	getTours,
	getTourById,
	deleteTour,
	createTour,
	updateTour,
	createTourReview,
	getTopTours,
} from '../controllers/tourController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getTours).post(protect, admin, createTour);
router.route('/:id/reviews').post(protect, createTourReview);
router.get('/top', getTopTours);
router
	.route('/:id')
	.get(getTourById)
	.delete(protect, admin, deleteTour)
	.put(protect, admin, updateTour);

export default router;
