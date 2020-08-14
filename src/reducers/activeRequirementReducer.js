import { FETCH_ACTIVE_REQUIREMENTS} from '../actions/types';

export default function(state = null, action) {
    switch(action.type) {
        case FETCH_ACTIVE_REQUIREMENTS:
            // console.log(action.payload);
            return action.payload || null;
        default:
            return state;
    }
}