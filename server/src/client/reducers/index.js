import { FETCH_USERS } from "../actions";
import { combineReducers } from "redux";


const usersReducer = (state= [], action) => {

    switch (action.type) {
        case FETCH_USERS:
            return action.payload.data;
        default:
            return state;
    }
};


export default combineReducers({
    users: usersReducer
});
