import { combineReducers } from 'redux';
import userReducer from './userReducer';
import errorReducer from './errorReducer';
import roomReducer from './roomReducer';
import reservationReducer from './reservationReducer';

export default combineReducers({
    user: userReducer,
    error: errorReducer,
    room: roomReducer,
    reservation: reservationReducer
})