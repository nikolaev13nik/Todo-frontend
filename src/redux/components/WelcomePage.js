import {changeMainPageAction} from "../actions/appAction";
import React from "react";
import {connect} from "react-redux";


const WelcomePage = (props) => {


    return (<div className="container mt-5">
        <div className="row">
            <div className="col-6">
                <button className="btn btn-lg btn-outline-primary"
                        onClick={() => props.changeMainPageAction("signIn")}>Sign In
                </button>
            </div>
            <div className="col-6">
                <button className="btn btn-lg btn-outline-primary"
                        onClick={() => props.changeMainPageAction("signUp")}>Sign Up
                </button>
            </div>
        </div>
    </div>)


}

const mapDispatchToProps = {
    changeMainPageAction
}
export default connect(null, mapDispatchToProps)(WelcomePage)