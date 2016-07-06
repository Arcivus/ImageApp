import { combineReducers } from 'redux';
import PicturesReducer from './reducer_pictures';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	pictures: PicturesReducer,
	form: formReducer,
});

export default rootReducer;