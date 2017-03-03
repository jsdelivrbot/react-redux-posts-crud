/**
 * Created by lucas on 3/2/17.
 */
import {FETCH_POSTS} from '../actions/index';

const INITIAL_STATE = {all: [], post: null};

// SINGLE FUNCTION TO A REDUCER
export default function(state = INITIAL_STATE, action) {

    switch (action.type) {
        case FETCH_POSTS:
            return {...state, all: action.payload.data};
        default:
            return state;
    }

}
