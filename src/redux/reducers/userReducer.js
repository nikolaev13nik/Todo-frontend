import {SAVE_USER} from "../actions/userAction";
import {SAVE_ALL_TASKS} from "../actions/appAction";

const initialState = {
    user: ""

};


export const userReducer = (state = initialState, action) => {
    switch (action.type) {


        case SAVE_USER:
            return {...state, user: action.payload}


        default:
            return state
    }
}