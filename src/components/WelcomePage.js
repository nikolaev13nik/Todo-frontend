
import React from "react";
import {connect} from "react-redux";
import {changeMainPageAction} from "../redux/actions/appAction";


const WelcomePage = (props) => {

    return (
        <div className="d-flex justify-content-around mt-5">
                <button className="btn btn-lg btn-outline-primary"
                        onClick={() => props.changeMainPageAction("signIn")}>Sign In
                </button>
                <button className="btn btn-lg btn-outline-primary"
                        onClick={() => props.changeMainPageAction("signUp")}>Sign Up
                </button>
    </div>)


}

const mapDispatchToProps = {
    changeMainPageAction
}
export default connect(null, mapDispatchToProps)(WelcomePage)