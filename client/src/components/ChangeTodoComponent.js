import React from "react";
import DateFnsUtils from '@date-io/date-fns';
import { addTodo, deleteTodo, findTodo, updateTodo } from "../actions/todo/todoActions";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { connect } from "react-redux";
import 'react-calendar/dist/Calendar.css'

class ChangeTodoComponent extends React.Component {
    state = {
        date: new Date()
    }

    render() {
        let titleInput;
        let noteInput;
        return(
            <>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.props.onHandleAdd(titleInput.value, noteInput.value, this.state.date)
                    titleInput.value = ""
                    noteInput.value = ""
                }}>
                    <label>
                        Title:
                        <input type="text" ref={node => titleInput = node} onChange={() => this.props.onHandleFind(titleInput.value)}/>
                    </label>
                    <label>
                        Note:
                        <input type="text" ref={node => noteInput = node}/>
                    </label>
                    <div>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker onChange={(date) => this.setState({ date })} value={this.state.date}/>
                        </MuiPickersUtilsProvider>
                    </div>
                    <button type="submit">
                        Add Todo
                    </button>
                </form>
            </>
        )
    }


}

const mapDispatchToProps = (dispatch) => {
    return {
        onHandleAdd: (title, note, date) => dispatch(addTodo(title, note, date)),
        onHandleFind: (title) => dispatch(findTodo(title)),
        onHandleDelete: (title) => dispatch(deleteTodo(title))
    }
}

export default connect(null, mapDispatchToProps)(ChangeTodoComponent);