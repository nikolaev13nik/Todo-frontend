import {encoderBase64, upgradeDateForSort} from "../../utils/util";
import {changeMainPageAction, saveTasksAction} from "./appAction";
import {URI_LOGIN, URI_NEW_USER} from "../../utils/configuration";

export const SAVE_USER = "APP/SAVE_USER"


export function saveUserToStoreAction(user) {
    return {
        type: SAVE_USER,
        payload: user

    }
}


export function loginAction(userForFetch) {

    return async dispatch => {
        try {
            const settings = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": encoderBase64(userForFetch)
                }
            }
            const response = await fetch(URI_LOGIN, settings)
            if (!response.ok) {
                alert("Your password is not correct")
                dispatch(changeMainPageAction(""))
                return
            }
            const user = await response.json()
            user.password = userForFetch.password

            let tasks=upgradeDateForSort(user.tasks);
            tasks.sort((a, b) => a.createdTime - b.createdTime);

            dispatch(saveUserToStoreAction(user))
            dispatch(saveTasksAction(tasks))
            dispatch(changeMainPageAction("toDoList"))


        } catch (e) {
            // ------------------------- TO DO---LOGGER--------------------
            console.log("catch in loginAction", e.message)
            // ------------------------- TO DO-----------------------
        }
    }
}

export function addUserAction(newUser) {
    return async dispatch => {
        try {
            const settings = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            }
            let response = await fetch(URI_NEW_USER, settings)
            if (!response.ok) {
                if (response.status === 409) {
                    alert("This user already exists !")
                    return
                }
                alert("error fetch registration ")
                dispatch(changeMainPageAction(""))
                return
            }
            let addedUser = await response.json();
            dispatch(changeMainPageAction("toDoList"))
            console.log(addedUser)
        } catch (e) {
            // ------------------------- TO DO-----------------------
            console.log("catch addUserAction", e.message)
            // ------------------------- TO DO-----------------------
        }
    }
}