import { FETCH_PICTURES, FETCH_PICTURE } from '../actions/index';

const INITIAL_STATE = { all: [], picture: null };

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
	case FETCH_PICTURE:
		return { ...state, picture: action.payload.data};
	case FETCH_PICTURES:
		return { ...state, all: action.payload.data, picture: null };

	default: 
		return state;
	}

}