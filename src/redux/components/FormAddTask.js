import React, {useState} from "react"

import {addTaskAction} from "../actions/appAction";
import {connect} from "react-redux";

const FormAddTask = (props) => {

    const [state,setState]=useState({title:""});

    const handlerSubmit = (event) => {
        event.preventDefault()
        props.addTaskAction(state)
        setState({title:""})
    };
   const  handleChange=(event)=> {
       setState(prevState => ({...prevState, ...{[event.target.name]: event.target.value}}))
    }


    return (<div>

            <form onSubmit={handlerSubmit} className="d-flex ml-3">

                <textarea type="text"  onChange={handleChange} name="title" value={state.title} cols="50" required/>
                    <button type="submit" className="btn btn-lg btn-outline-primary m-1">add task to list</button>


            </form>

    </div>)
}
const mapDispatchToProps = {
    addTaskAction
}
export default connect (null,mapDispatchToProps)(FormAddTask);