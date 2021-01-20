import {encoderBase64, upgradeDateForSort} from "../../utils/util";
import {URI_ADD_TASK, URI_DELETE_TASK, URI_EDIT_TASK, URI_REMOVE_ALL_TASKS} from "../../utils/configuration";


export const SAVE_ALL_TASKS = "APP/SAVE_ALL_TASKS";
export const CHANGE_MAIN_PAGE = "APP/CHANGE_MAIN_PAGE";


export function saveTasksAction(array) {
    return {
        type: SAVE_ALL_TASKS,
        payload: array

    }
}

export function changeMainPageAction(page) {
    return {
        type: CHANGE_MAIN_PAGE,
        payload: page

    }
}

export function deleteTaskAction(id, callBack) {
    return async (dispatch, getState) => {
        try {
            const authUser = getState().user.user;
            const settings = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": encoderBase64(authUser)
                }
            }
            let login = getState().user.user.login
            let response = await fetch(`${URI_DELETE_TASK}${login}/${id}`, settings)
            if (!response.ok) {
                alert("error deleteTask  " + response.status + " " + response.statusText)
            }
            let array = await response.json();
            let tasks = upgradeDateForSort(array);
            dispatch(saveTasksAction(tasks))
        } catch (e) {
            // ------------------------- TO DO-----------------------
            console.log("catch deleteTask", e.message)
            // ------------------------- TO DO-----------------------
        }
    }
}

export function editTaskAction(task) {
    return async (dispatch, getState) => {
        try {
            const authUser = getState().user.user;
            const settings = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": encoderBase64(authUser)
                },
                body: JSON.stringify({
                    id: task.id,
                    isDone: task.isDone,
                    title: task.title
                })
            }
            let login = getState().user.user.login
            let response = await fetch(`${URI_EDIT_TASK}${login}`, settings)
            if (!response.ok) {
                alert("editTaskAction  " + response.status + " " + response.statusText)
            }
            let array = await response.json();
            let tasks = upgradeDateForSort(array);
            dispatch(saveTasksAction(tasks))
        } catch (e) {
            // ------------------------- TO DO-----------------------
            console.log("catch editRecordAction", e.message)
            // ------------------------- TO DO-----------------------
        }
    }
}

export const SAVE_KIND_SORT = "APP/SAVE_KIND_SORT"

export function saveKindSortAction(sortToggle) {
    return {
        type: SAVE_KIND_SORT,
        payload: sortToggle
    }
}

export function addTaskAction(task) {
    return async (dispatch, getState) => {
        try {
            const authUser = getState().user.user;
            const settings = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": encoderBase64(authUser)
                },
                body: JSON.stringify({
                    title: task.title
                })
            }
            let login = getState().user.user.login
            const response = await fetch(URI_ADD_TASK + login, settings)
            if (!response.ok) {
                alert("error add task action" )
                return
            }
            const array = await response.json();
            let tasks = upgradeDateForSort(array);
            dispatch(saveTasksAction(tasks))
        } catch (e) {
            // ------------------------- TO DO-----------------------
            console.log("catch addTask", e.message)
            // ------------------------- TO DO-----------------------
        }
    }
}

export function clearTaskListAction() {
    return async (dispatch, getState) => {
        try {
            const authUser = getState().user.user;
            const settings = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": encoderBase64(authUser)
                }
            }
            let login = getState().user.user.login
            let response = await fetch(`${URI_REMOVE_ALL_TASKS}${login}`, settings)
            if (!response.ok) {
                alert("error deleteTaskAction  " + response.status + " " + response.statusText)
            }
            let array = await response.json();
            let tasks = upgradeDateForSort(array);
            dispatch(saveTasksAction(tasks))
        } catch (e) {
            // ------------------------- TO DO-----------------------
            console.log("catch deleteTask", e.message)
            // ------------------------- TO DO-----------------------
        }
    }

}
