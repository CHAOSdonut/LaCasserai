import { combineReducers } from 'redux';
import userReducer from './userReducer';
import errorReducer from './errorReducer';
import roomReducer from './roomReducer';

export default combineReducers({
    user: userReducer,
    error: errorReducer,
    room: roomReducer
})