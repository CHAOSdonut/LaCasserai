import {
    ERROR_SOLVED_LOGIN, ERROR_SOLVED_REGISTER
} from "./types";

export const loginErrorSolved = () => {
    console.log('errorAction triggered');
    return {
        type: ERROR_SOLVED_LOGIN
    }
};

export const registerErrorSolved = () => dispatch => {
    dispatch ({
        type: ERROR_SOLVED_REGISTER
    })
};
