import { combineReducers } from 'redux';
import authReducer from './authReducer';
import donorReducer from './donorReducer';

export default combineReducers({
    auth: authReducer,
    donors: donorReducer
});