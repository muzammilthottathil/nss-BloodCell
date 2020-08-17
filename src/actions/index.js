import axios from 'axios';
import {
    FETCH_USER,
    LOGIN_USER,
    LOGOUT_USER,
    FETCH_DONORS,
    FETCH_ACTIVE_REQUIREMENTS,
    FETCH_CLOSED_REQUIREMENTS,
    FETCH_HOSPITALS,
    RESET_REQUIREMENTS,
    RESET_DONORS,
    ASSIGN_DONORS
} from './types';
import { RESET_HOSPITALS } from './types';

export const fetchUser = () => async (dispatch) => {
    try {
        const res = await axios.get('/auth/currentUser');
        dispatch({ type: FETCH_USER, payload: res.data });
    } catch (err) {
        console.log(err.message);
    }
};

export const loginUser = (user) => async (dispatch) => {
    try {
        const res = await axios.post('/auth/login', user);
        dispatch({ type: LOGIN_USER, payload: res.data });
    } catch (err) {
        console.log(err.message);
    }
};

export const logoutUser = () => async (dispatch) => {
    try {
        const res = await axios.get('/auth/logout');
        dispatch({ type: LOGOUT_USER, payload: res.data });
    } catch (err) {
        console.log(err);
    }
};

// -------------------------------------------------------
// ------------------Donor--------------------------------

export const fetchDonors = () => async (dispatch) => {
    try {
        const res = await axios.get('/donor');
        dispatch({ type: FETCH_DONORS, payload: res.data });
    } catch (err) {
        console.log(err);
    }
};

export const addDonor = (donorDetails) => async (dispatch) => {
    try {
        const res = await axios.post('/donor/add', donorDetails);
        dispatch({ type: RESET_DONORS });
    } catch (err) {
        console.log(err.message);
    }
};

// --------------------------------------------------------
// -----------------Active Requirements--------------------

export const fetchActiveRequirements = () => async (dispatch) => {
    try {
        const res = await axios.get('/requirement/active/');
        dispatch({ type: FETCH_ACTIVE_REQUIREMENTS, payload: res.data });
    } catch (err) {
        console.log(err.message);
    }
};

// --------------------------------------------------------
// -----------------Assign Donor--------------------

export const assignDonor = (donorId, requirementId) => async (dispatch) => {
    try {
        const res = await axios.get(
            '/requirement/' + requirementId + '/assigndonor/' + donorId
        );
        dispatch({ type: ASSIGN_DONORS, payload: res.data });
    } catch (err) {
        console.log(err.message);
    }
};

// --------------------------------------------------------
// -----------------Closed Requirements--------------------

export const fetchClosedRequirements = () => async (dispatch) => {
    try {
        const res = await axios.get('/requirement/closed/');
        dispatch({ type: FETCH_CLOSED_REQUIREMENTS, payload: res.data });
    } catch (err) {
        console.log(err.message);
    }
};

// --------------------------------------------------------
// -----------------Add Requirement--------------------

export const addRequirement = (requirement) => async (dispatch) => {
    try {
        const res = await axios.post('/requirement/add', requirement);
        dispatch({ type: RESET_REQUIREMENTS });
    } catch (err) {
        console.log(err.message);
    }
};

// --------------------------------------------------------
// -----------------Hospitals--------------------

export const fetchHospitals = () => async (dispatch) => {
    try {
        const res = await axios.get('/hospital');
        dispatch({ type: FETCH_HOSPITALS, payload: res.data });
    } catch (err) {
        console.log(err.message);
    }
};

export const addHospital = (hospital) => async (dispatch) => {
    try {
        const res = await axios.post('/hospital/add', hospital);
        dispatch({ type: RESET_HOSPITALS });
    } catch (err) {
        console.log(err.message);
    }
};
