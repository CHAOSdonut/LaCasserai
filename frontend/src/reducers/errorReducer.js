import {
    LOGIN_ERROR,
    ERROR_SOLVED_REGISTER,
    ERROR_SOLVED_LOGIN,
    REGISTER_ERROR, CREATE_ROOM_ERROR
} from "../actions/types";

const initialState = {
    login: {
        error: false,
        errorCode: '',
        errorMsg: ''
    },
    register: {
        error: false,
        errorCode: '',
        errorMsg: ''
    }
};

export default function(state = initialState, action){
    switch(action.type){

        case LOGIN_ERROR:
            return{
                ...state,
                login: {
                    error: true,
                    errorCode: action.payload.code,
                    errorMsg: action.payload.msg,
                }
            };

        case REGISTER_ERROR:
            return{
                ...state,
                register: {
                    error: true,
                    errorCode: action.payload.code,
                    errorMsg: action.payload.msg,
                }
            };

        case ERROR_SOLVED_LOGIN:
            return{
                ...state,
                login: {
                    error: false,
                    errorCode: '',
                    errorMsg: '',
                }
            };

        case ERROR_SOLVED_REGISTER:
            return{
                ...state,
                register: {
                    error: false,
                    errorCode: '',
                    errorMsg: '',
                }
            };

        case CREATE_ROOM_ERROR:
            return{
                ...state,
                room: {
                    error: true,
                    errorCode: action.payload.code,
                    errorMsg: action.payload.msg,
                }
            };

        default:
            return state;
    }
}