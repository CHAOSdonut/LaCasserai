import {
    GET_ROOMS,
    CREATE_ROOM, DELETE_ROOM,
} from "../actions/types";

const initialState = {
    rooms: []
};

export default function(state = initialState, action){
    switch(action.type){

        case GET_ROOMS:
            return {
                ...state,
                rooms: action.payload
            };

        case DELETE_ROOM:
            return {
                ...state,
            };

        default:
            return state;
    }
}