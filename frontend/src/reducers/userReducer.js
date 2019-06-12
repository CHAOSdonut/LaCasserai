import {
    GET_USERS,
    USER_LOADING,
    LOGIN_USER,
    REGISTER_USER,
    USER_DONE_LOADING,
} from "../actions/types";
import history from '../history';

const initialState = {
    user: {id:'', mail:'', role:''},
    token: '',
    loading: false,
};

export default function(state = initialState, action){
    switch(action.type){

        case GET_USERS:
            return {
                ...state
            };

        case USER_LOADING:
            return {
                ...state,
                loading: true
            };

        case USER_DONE_LOADING:
            return {
                ...state,
                loading: false
            };

        case LOGIN_USER:
            history.push('/');
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                loading: false,
            };

        case REGISTER_USER:
            history.push('/');
            console.log("new user created");
            return {
                ...state
            };

        default:
            return state;
    }
}