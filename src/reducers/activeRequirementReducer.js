import {
    FETCH_ACTIVE_REQUIREMENTS,
    RESET_REQUIREMENTS,
    ASSIGN_DONORS
} from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_ACTIVE_REQUIREMENTS:
            // console.log(action.payload);
            return action.payload || null;
        case RESET_REQUIREMENTS:
        case ASSIGN_DONORS:
            return null;
        default:
            return state;
    }
}
