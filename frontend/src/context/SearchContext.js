import React, { useReducer, createContext } from 'react';

const initialState = {
	isSearchBarOpen: false,
	searchTour: '',
	searchCategory: '',
	isSearchTour: true,
	isSearchCategory: false,
};

export const CommonStateContext = createContext();
//Exported to header
export const CommonDispatchContext = createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case 'TOGGLE_SEARCH_BAR':
			return {
				...state,
				isSearchBarOpen: !state.isSearchBarOpen,
			};
		case 'SET_TOUR_SEARCH_KEYWORD':
			return {
				...state,
				searchTour: action.payload.searchTour,
				searchCategory: '',
				isSearchTour: true,
				isSearchCategory: false,
			};
		case 'SET_CATEGORY_SEARCH_KEYWORD':
			return {
				...state,
				searchTour: '',
				searchCategory: action.payload.searchCategory,
				isSearchTour: false,
				isSearchCategory: true,
			};
		default:
			throw new Error(`Unknown action: ${action.type}`);
	}
};

const CommonProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<CommonDispatchContext.Provider value={dispatch}>
			<CommonStateContext.Provider value={state}>
				{children}
			</CommonStateContext.Provider>
		</CommonDispatchContext.Provider>
	);
};

export const toggleSearchBar = (dispatch) => {
	return dispatch({
		type: 'TOGGLE_SEARCH_BAR',
	});
};
//Exported to header
export const setSearchTour = (dispatch, searchTour) => {
	return dispatch({
		type: 'SET_TOUR_SEARCH_KEYWORD',
		payload: {
			searchTour: searchTour,
			searchCategory: '',
		},
	});
};

export const setSearchCategory = (dispatch, searchCategory) => {
	return dispatch({
		type: 'SET_CATEGORY_SEARCH_KEYWORD',
		payload: {
			searchTour: '',
			searchCategory: searchCategory,
		},
	});
};

export default CommonProvider;
