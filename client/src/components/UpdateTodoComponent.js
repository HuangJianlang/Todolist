import React from "react";
import { updateTodo } from "../actions/todo/todoActions"
import { connect } from "react-redux";


class UpdateTodoComponent extends React.Component{
    render() {
        return (
            <button onClick={() => this.props.onHandleUpdate(this.props.todos)}>
                Update to Server
            </button>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todo.todos
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        onHandleUpdate: (todos) => dispatch(updateTodo(todos))
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(UpdateTodoComponent);