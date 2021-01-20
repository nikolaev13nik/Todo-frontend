import React from "react"
import {connect} from "react-redux";
import {changeMainPageAction} from "../redux/actions/appAction";
import {addUserAction} from "../redux/actions/userAction";


const SignUp = (props) => {

    const handlerOnSubmitForm = (e) => {
        e.preventDefault();
        let form = {
            name: e.target.name.value,
            login: e.target.login.value,
            password: e.target.password.value
        }
        props.addUserAction(form)
    }
    return (<div >
            <form onSubmit={handlerOnSubmitForm} className="d-flex justify-content-center mt-5" >
                <label className="grey-text mr-1">
                    Name
                    <input type="text" name="name" className="form-control" required/>
                </label>
                <label className="grey-text mr-1">
                     login / email
                    <input type="email" name="login" className="form-control" required/>
                </label>


                <label className="grey-text mr-1">
                     password
                    <input type="password" name="password" className="form-control" required/>
                </label>
                <button type="submit" className="btn btn-outline-primary">Send</button>
            </form>

        <div className="d-flex justify-content-center mt-2">
            <button onClick={() => {
                props.changeMainPageAction("")
            }} type="button" className="btn btn-outline-primary">Back to start
            </button>
        </div>


    </div>)
}

const mapDispatchToProps = {
    changeMainPageAction,
    addUserAction
}

export default connect(null,mapDispatchToProps)(SignUp);