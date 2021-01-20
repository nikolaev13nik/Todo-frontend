import React from "react"
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import {connect} from "react-redux";
import WelcomePage from "./WelcomePage";
import TodoList from "./ToDoList";


const Main = (props) => {

    switch (props.mainPage) {
        case "signIn":
            return <SignIn/>
        case "signUp":
            return <SignUp/>
        case "toDoList":
            return <TodoList/>
        default :
            return <WelcomePage/>
    }
}
const mapStateToProps = (state) => {
    return {
        mainPage: state.app.mainPage
    }
}
export default connect(mapStateToProps, null)(Main);