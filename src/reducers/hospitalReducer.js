import { FETCH_HOSPITALS } from '../actions/types';

export default function(state = null, action) {
    switch(action.type) {
        case FETCH_HOSPITALS:
            // console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}