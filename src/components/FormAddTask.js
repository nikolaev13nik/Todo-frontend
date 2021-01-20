import React, {useState} from "react"

import {connect} from "react-redux";
import {addTaskAction} from "../redux/actions/appAction";

const FormAddTask = (props) => {

    const [state, setState] = useState({title: ""});

    const handlerSubmit = (event) => {
        event.preventDefault()
        props.addTaskAction(state)
        setState({title: ""})
    };
    const handleChange = (event) => {
        setState(prevState => ({...prevState, ...{[event.target.name]: event.target.value}}))
    }

    return (<div>
        <form onSubmit={handlerSubmit} className="d-flex justify-content-center">
            <textarea type="text" onChange={handleChange} name="title" value={state.title} cols="50" required/>
            <button type="submit" className="btn btn-lg btn-outline-primary m-1">add task to list</button>
        </form>
    </div>)
}
const mapDispatchToProps = {
    addTaskAction
}
export default connect(null, mapDispatchToProps)(FormAddTask);