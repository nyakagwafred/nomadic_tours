import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tourService from './tourService';

const initialState = {
	tours: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};

//Create new tour
export const createTour = createAsyncThunk(
	'tours/create',
	async (tourData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await tourService.createTour(tourData, token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

// Get tours
export const getTours = createAsyncThunk(
	'tours/getAll',
	async (_, thunkAPI) => {
		try {
			//const token = thunkAPI.getState().auth.user.token;
			return await tourService.getTours();
	
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

// Delete tour
export const deleteTour = createAsyncThunk(
	'tours/delete',
	async (loanId, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await tourService.deleteTour(loanId, token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

// Update Tour
export const updateTour = createAsyncThunk(
	'tours/update',
	async (tourData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await tourService.updateTour(tourData, token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

export const tourSlice = createSlice({
	name: 'tour',
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(createTour.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createTour.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.isError = false;
				state.tours.push(action.payload);
			})
			.addCase(createTour.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getTours.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getTours.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.tours = action.payload;
			})
			.addCase(getTours.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(deleteTour.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteTour.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.tours = state.tours.filter(
					(loan) => loan._id !== action.payload.id,
				);
			})
			.addCase(deleteTour.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(updateTour.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(updateTour.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.tours = action.payload;
				//state.tours = state.tours;
				//state.tours.push(action.payload);
			})
			.addCase(updateTour.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const { reset } = tourSlice.actions;
export default tourSlice.reducer;