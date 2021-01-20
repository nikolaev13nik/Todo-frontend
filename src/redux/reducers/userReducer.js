import {SAVE_USER} from "../actions/userAction";


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