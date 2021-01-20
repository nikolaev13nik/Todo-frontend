import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {changeMainPageAction, clearTaskListAction, saveKindSortAction, saveTasksAction} from "../actions/appAction";
import {loginAction, saveUserToStoreAction} from "../actions/userAction";
import Task from "./Task";
import Table from 'react-bootstrap/Table';
import {Dropdown} from "react-bootstrap";
import FormAddTask from "./FormAddTask";

const TodoList = (props) => {

    useEffect(() => {
        setTasks(props.tasks)
    }, [props.tasks])

    useEffect(() => {
        return () => {
            props.saveTasksAction([]);
            props.saveUserToStoreAction("")
        }
    }, [])

    const [tasks, setTasks] = useState(props.tasks);

    const handlerSort = (toggle) => {
        if (toggle === "desDateCreated") {
            props.saveKindSortAction("desDateCreated");
            tasks.sort((a, b) => a.createdTime - b.createdTime)
        }
        if (toggle === "ascDateCreated") {
            props.saveKindSortAction("ascDateCreated");
            tasks.sort((a, b) => b.createdTime - a.createdTime)
        }
        if (toggle === "desDateModified") {
            props.saveKindSortAction("desDateModified");
            tasks.sort((a, b) => a.modifiedTime - b.modifiedTime)
        }
        if (toggle === "ascDateModified") {
            props.saveKindSortAction("ascDateModified");
            tasks.sort((a, b) => b.modifiedTime - a.modifiedTime)
        }
    }


    if (props.kindSort) {
        handlerSort(props.kindSort)
    }


    return (<div className="container-fluid">
            <div className="row justify-content-center m-5">
                <div className="col-12 border">

                    <div className="d-flex mt-3 justify-content-around">
                        <div>
                            <h1>{props.authUser.name} you have {tasks.length} tasks</h1>
                        </div>
                        <div>
                            <button className="btn btn-lg  btn-danger"
                                    onClick={() => props.changeMainPageAction("")}
                            >Sign out
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-12  mt-5">
                    <div className="d-flex justify-content-around">
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                                sort
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => handlerSort("desDateCreated")}>sort descending by creation
                                    date</Dropdown.Item>
                                <Dropdown.Item onClick={() => handlerSort("ascDateCreated")}>sort ascending by creation
                                    date</Dropdown.Item>
                                <Dropdown.Item onClick={() => handlerSort("desDateModified")}>sort descending by
                                    modified
                                    date</Dropdown.Item>
                                <Dropdown.Item onClick={() => handlerSort("ascDateModified")}>sort ascending by modified
                                    date</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div>
                            <button className="btn btn-sm  btn-outline-primary"
                                    onClick={() => props.clearTaskListAction()}>Clear list
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <Table striped bordered hover className="col mt-1">
                        <thead>
                        <tr>
                            <th>Created date</th>
                            <th>Modified date</th>
                            <th className="th-title">Title</th>
                            <th>Done</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tasks.map(task => <Task task={task} key={task.id}/>)}
                        </tbody>
                    </Table>
                </div>
            </div>
            <div className="col-12">
                <FormAddTask/>
            </div>



        </div>


    )
}
const mapDispatchToProps = {
    changeMainPageAction,
    loginAction,
    saveKindSortAction,
    clearTaskListAction,
    saveTasksAction,
    saveUserToStoreAction


}
const mapStateToProps = (state) => {
    return {
        tasks: state.app.tasks,
        kindSort: state.app.kindSort,
        authUser: state.user.user

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)