import axios from 'axios';
import { FETCH_USER, LOGIN_USER, LOGOUT_USER, FETCH_DONORS } from './types';


export const fetchUser = () => async dispatch => {
	try {
		const res = await axios.get('/auth/currentUser');
		dispatch({ type: FETCH_USER, payload: res.data })
	} catch(err) {
		console.log(err.message);
	}
};

export const loginUser = (user) => async dispatch => {
	try {
		const res = await axios.post('/auth/login', user);
		dispatch({ type: LOGIN_USER, payload: res.data });
	} catch(err) {	
		console.log(err.message);
	}
}

export const logoutUser = () => async dispatch => {
	try {
		const res = await axios.get('/auth/logout');
		dispatch({ type: LOGOUT_USER, payload: res.data });
	} catch(err) {
		console.log(err);
	}
}

// -------------------------------------------------------
// ------------------Donor--------------------------------

export const fetchDonors = () => async dispatch => {
	try {
		const res = await axios.get('/donor');
		dispatch({ type: FETCH_DONORS, payload: res.data });
	} catch(err) {
		console.log(err);
	}
}

