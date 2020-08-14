import { FETCH_HOSPITALS, RESET_HOSPITALS } from '../actions/types';

export default function(state = null, action) {
    switch(action.type) {
        case FETCH_HOSPITALS:
            return action.payload.hospitals || null;
        case RESET_HOSPITALS:
            return null;
        default:
            return state;
    }
}