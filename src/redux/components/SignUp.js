import React from "react"
import {changeMainPageAction} from "../actions/appAction";
import {addUserAction} from "../actions/userAction";
import {connect} from "react-redux";

const SignUp = (props) => {

    const handlerOnSubmitForm = (e) => {
        e.preventDefault();
        let form = {
            name: e.target.name.value,
            login: e.target.login.value,
            password: e.target.password.value
        }
        console.log(form)
        props.addUserAction(form)
    }
    return (<div>
            <form onSubmit={handlerOnSubmitForm} >
                <label className="grey-text">
                    Name
                    <input type="text" name="name" className="form-control" required/>
                </label>
                <label className="grey-text">
                     login / email
                    <input type="email" name="login" className="form-control" required/>
                </label>

                <br/>
                <label className="grey-text">
                     password
                    <input type="password" name="password" className="form-control" required/>
                </label>
                <button type="submit" className="btn btn-outline-primary">Send</button>
            </form>
            <button onClick={() => {
                props.changeMainPageAction("")
            }} type="button" className="btn btn-outline-primary">Back to start
            </button>

    </div>)
}

const mapDispatchToProps = {
    changeMainPageAction,
    addUserAction
}

export default connect(null,mapDispatchToProps)(SignUp);