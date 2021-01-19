import {CHANGE_MAIN_PAGE, SAVE_ALL_TASKS, SAVE_KIND_SORT, SORT_TASKS} from "../actions/appAction";

const initialState = {
    tasks: [],
    mainPage: "",
    kindSort: null

};


export const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case SAVE_ALL_TASKS:
            return {...state, tasks: action.payload}

        case CHANGE_MAIN_PAGE:
            return {...state, mainPage: action.payload}

        case SAVE_KIND_SORT:
            return{...state,kindSort: action.payload}

        default:
            return state;
    }

};