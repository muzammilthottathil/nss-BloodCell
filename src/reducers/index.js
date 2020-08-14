import { combineReducers } from 'redux';
import authReducer from './authReducer';
import donorReducer from './donorReducer';
import activeRequirementReducer from './activeRequirementReducer';
import closedRequirementReducer from './closedRequirementReducer';
import hospitalReducer from './hospitalReducer';

export default combineReducers({
    auth: authReducer,
    donors: donorReducer,
    activeRequirements: activeRequirementReducer,
    closedRequirements: closedRequirementReducer,
    hospitals: hospitalReducer
});