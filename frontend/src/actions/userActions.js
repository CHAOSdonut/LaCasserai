import {
    GET_USERS,
    USER_LOADING,
    LOGIN_USER,
    REGISTER_USER,
    LOGIN_ERROR,
    REGISTER_ERROR,
    USER_DONE_LOADING
} from "./types";
import axios from 'axios';
import { loginErrorSolved, registerErrorSolved } from "./errorActions";

export const getUsers = () => {
    return {
        type: GET_USERS
    }
};

export const setUserLoading = () => {
    return {
        type: USER_LOADING
    }
};

export const setUserDoneLoading = () => {
    return {
        type: USER_DONE_LOADING
    }
};

export const registerUser = (Fname, Lname, mail, pw) => dispatch => {
    axios
        .post('user/register', {
            first_name: Fname,
            last_name: Lname,
            mail: mail,
            password: pw
        })
        .then(res => {
            dispatch(registerErrorSolved());
            dispatch({
                type: REGISTER_USER,
                payload: res.data
            })
        })
        .catch(error => {
            dispatch({
                type: REGISTER_ERROR,
                payload: {
                    code: error.response.status,
                    msg: error.response.data.msg
                }
            })
        })
};

export const loginUser = (login, pw, token) => dispatch => {
    dispatch(setUserLoading());
    axios
        .post('user/login', {
            mail: login,
            password: pw,
            token: token
        })
        .then(res => {
            dispatch(loginErrorSolved());
            dispatch({
                type: LOGIN_USER,
                payload: res.data
            })
        })
        .catch(error => {
            dispatch(setUserDoneLoading());
            dispatch({
                type: LOGIN_ERROR,
                payload: {
                    code: error.response.status,
                    msg: error.response.data.msg
                }
            })
        })
};