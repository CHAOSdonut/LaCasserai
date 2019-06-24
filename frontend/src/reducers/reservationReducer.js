import {
    CREATE_RESERVATION_ERROR,
    GET_RESERVATIONS
} from "../actions/types";

const initialState = {
    reservations: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case CREATE_RESERVATION_ERROR:
            return {
                ...state
            };

        case GET_RESERVATIONS:
            return {
                ...state,
                reservations: action.payload,
            };

        default:
            return state;
    }
}