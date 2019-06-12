import {
    GET_ROOMS,
    GET_ROOMS_ERROR,
    CREATE_ROOM,
    CREATE_ROOM_ERROR,
    DELETE_ROOM,
    UPDATE_ROOM_ERROR,
    DELETE_ROOM_ERROR
} from "./types";
import axios from 'axios';
import history from '../history';

export const getRooms = () => dispatch => {
    axios
        .get('/room/getrooms')
        .then(res => {
        dispatch({
            type: GET_ROOMS,
            payload: res.data
        })})
};

export const createRoom = (room_nr, price, description, facilities, picture_name) => dispatch => {
    axios
        .post('/room/create', {
            room_nr:  room_nr,
            price: price,
            description: description,
            facilities: facilities,
            picture_name: picture_name
        })
        .then(
            history.push('/admin')
        )
        .catch(error => {
            dispatch({
                type: CREATE_ROOM_ERROR,
                payload: {
                    code: error.response.status,
                    msg: error.response.data.msg
                }
            })
        })
};

export const updateRoom = (id, room_nr, price, description, facilities, picture_name) => dispatch => {
    axios
        .put('/room/updateroom', {
            id: id,
            room_nr:  room_nr,
            price: price,
            description: description,
            facilities: facilities,
            picture_name: picture_name
        })
        .then(
            history.push('/admin')
        )
        .catch(error => {
            dispatch({
                type: UPDATE_ROOM_ERROR,
                payload: {
                    code: error.response.status,
                    msg: error.response.data.msg
                }
            })
        })
};

export const deleteRoom = (id) => dispatch => {
    axios
        .delete('/room/deleteroom', {
            data: {id: id}
        })
        .then(
            history.push('/admin')
        )
        .catch(error => {
            dispatch({
                type: DELETE_ROOM_ERROR,
                payload: {
                    code: error.response.status,
                    msg: error.response.data.msg
                }
            })
        })
};