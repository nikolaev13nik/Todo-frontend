import React from "react"
import {connect} from "react-redux";
import {changeMainPageAction} from "../actions/appAction";
import {loginAction} from "../actions/userAction";

const SignIn=(props)=>{


    const handlerOnSubmitForm=(e)=>{
        e.preventDefault();
        let data = {
            login: e.target.login.value,
            password: e.target.password.value
        };
        props.loginAction(data);
    }


    return (
        <div>
            <form onSubmit={handlerOnSubmitForm} className="mt-5 d-flex justify-content-center">
                <label className="grey-text mr-1">
                    Login / Email
                    <input type="text" name='login' className="form-control" required/>
                </label>
                <label className="grey-text mr-1">
                    Password
                    <input type="password" name="password" className="form-control" required/>
                </label>
                <br/>
                <button type="submit" className="btn btn-lg btn-outline-primary">Send</button>
            </form>
            <div className="d-flex justify-content-center">
                <button onClick={()=>props.changeMainPageAction("")}
                        type="button"
                        className="btn btn-outline-primary mt-1 ">
                    Back to start
                </button>
            </div>

    </div>)
}
const mapDispatchToProps = {
    changeMainPageAction,
    loginAction
}

export default connect(null,mapDispatchToProps)(SignIn);