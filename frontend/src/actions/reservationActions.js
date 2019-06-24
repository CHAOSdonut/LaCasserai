import {
    CREATE_RESERVATION_ERROR,
    GET_RESERVATIONS
} from "./types";
import axios from 'axios';
import history from '../history';

export const createReservation = (user, room, from_date, till_date) => dispatch => {
    let foundRoom = false;
    axios
        .get('/reservation/getreservations')
        .then(res => {
                res.data.forEach(function (reservation) {
                    if (reservation.room === room) {
                        foundRoom = true;
                    }
                });

                if (foundRoom) {
                    console.log("duplicate reservation")
                }
                else {
                    axios
                        .post('/reservation/create', {
                            user: user,
                            room: room,
                            from_date: from_date,
                            till_date: till_date
                        })
                        .then(
                            history.push('/rooms')
                        )
                        .catch(error => {
                            dispatch({
                                type: CREATE_RESERVATION_ERROR,
                                payload: {
                                    code: error.response.status,
                                    msg: error.response.data.msg
                                }
                            })
                        })
                }
            }
        );
};

export const getReservations = () => dispatch => {
    axios
        .get('/reservation/getreservations')
        .then(res => {
            dispatch({
                type: GET_RESERVATIONS,
                payload: res.data
            })
        })
};