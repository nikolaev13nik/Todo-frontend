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


    return (<div>
            <form onSubmit={handlerOnSubmitForm}>
                <label className="grey-text">
                    Login / Email
                    <input type="text" name='login' className="form-control"/>
                </label>
                <label className="grey-text">
                    Password
                    <input type="text" name="password" className="form-control"/>
                </label>
                <br/>
                <button type="submit" className="btn btn-outline-primary">Send</button>
            </form>
            <button onClick={()=>props.changeMainPageAction("")}
                    type="button"
                    className="btn btn-outline-primary mt-1">
                Back to start
            </button>
    </div>)
}
const mapDispatchToProps = {
    changeMainPageAction,
    loginAction
}

export default connect(null,mapDispatchToProps)(SignIn);