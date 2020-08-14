import { FETCH_DONORS } from '../actions/types';

export default function(state = null, action) {
    switch(action.type) {
        case FETCH_DONORS:
            // console.log(action.payload);
            return action.payload.donors || null;
        default:
            return state;
    }
}