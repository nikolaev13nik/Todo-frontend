import React, {useState} from "react"
import {changeMainPageAction, deleteTask, deleteTaskAction, editTaskAction, sortTasks} from "../actions/appAction";
import {loginAction} from "../actions/userAction";
import {Dropdown} from "react-bootstrap";
import {connect} from "react-redux";
import Collapse from "react-bootstrap/Collapse";

const Task = (props) => {

    let createdDate = new Date(props.task.createdDate).toLocaleString("en-GB")
    let modifiedDate = new Date(props.task.modifiedDate).toLocaleString("en-GB")

    const [open, setOpen] = useState(false);
    const [state, setState] = useState({title:props.task.title});

    const handlerInput = (event) => {
        event.persist();
        setState(prevState => ({...prevState, ...{[event.target.name]: event.target.value}}))
    };

    const handlerSubmit=(event)=>{
        event.preventDefault();
        let g={...props.task,...state}
        // console.log(g)
        props.editTaskAction(g);
        setOpen(!open)
    }
    const handlerComplete=(flag)=>{
        // console.log(state)
        let g={...props.task,...state,isDone:flag}

        props.editTaskAction(g);
    }


let isDone=props.task.isDone?"Done":props.task.isDone

    console.log(props.task.isDone)
    return (<>
            <tr>
                <td>
                    {createdDate}
                </td>
                <td>
                    {modifiedDate}
                </td>
                <td>
                    {props.task.title}
                </td>
                <td>
                    {isDone}
                </td>
                <td>
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                            options
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setOpen(!open)}>Edit</Dropdown.Item>
                            <Dropdown.Item onClick={() => handlerComplete(!props.task.isDone)}>Complete</Dropdown.Item>
                            <Dropdown.Item onClick={() => props.deleteTaskAction(props.task.id)}>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </td>
            </tr>

            <Collapse in={open}>
                <tr>
                    <td colSpan="4">
                        <input type="text"
                               onChange={handlerInput}
                               name="title"
                               value={state.title}
                               // value={props.task.title}
                               className="input-edit-task"
                               placeholder="type here"
                               required/>
                    </td>
                    <td>
                        <button className="btn btn-sm btn-outline-primary"
                        onClick={handlerSubmit}
                        >submit</button>
                        <button className="btn btn-sm btn-danger"
                                onClick={() => setOpen(!open)}>cancel</button>
                    </td>
                </tr>
            </Collapse>
        </>
    )
}
const mapDispatchToProps = {
    deleteTaskAction,
    editTaskAction

}
const mapStateToProps = (state) => {
    return {
        // user:state.user.user
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Task);