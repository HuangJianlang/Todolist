import React from "react";
import { connect } from "react-redux";
import {updateTodo, deleteTodo, findTodo, triggerTodo} from "../actions/todo/todoActions";

//Material UI
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { TextField } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";

class TodoComponent extends React.Component{

    state = {
        isOpen: false,
        todoInput: {},
        todoDate: {}
    }

    onHandleOpen() {
        this.setState({isOpen: true})
    }

    onHandleClose() {
        this.setState({isOpen: false})
    }

    onHandleInputChange(e, todo){
        const todoInput = this.state.todoInput;
        todoInput[todo.id] = e.target.value;
        todo.note = e.target.value;
        this.setState({todoInput: todoInput}, () => this.props.onHandleUpdate(todo));
    }

    render() {
        return(<div className={{width: '100%'}}>
                {this.props.todos.map((todo) => {
                    this.state.todoInput[todo.id] = todo.note;
                    return(
                        <ExpansionPanel key={todo.id}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-label="Expand"
                            aria-controls="additional-actions1-content"
                            id="additional-actions1-header"
                        >
                        <FormControlLabel
                            aria-label="Acknowledge"
                            onClick={(event) => event.stopPropagation()}
                            onFocus={(event) => event.stopPropagation()}
                            control={<Checkbox checked={todo.completed} onChange={() => this.props.onHandleTrigger(todo.id)}/>}
                            label={todo.title}
                        />
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Grid container direction="column" alignItems="flex-start" spacing={2}>
                                        <Grid item>
                                            <TextField
                                                style={{margin: "-15px 0 0 0", width:200}}
                                                label={"Note"}
                                                id={todo.id}
                                                value={this.state.todoInput[todo.id]}
                                                onChange={(e) => this.onHandleInputChange(e, todo)}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <KeyboardDatePicker
                                                    style={{width:200}}
                                                />
                                            </MuiPickersUtilsProvider>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container direction="column" alignItems="flex-end" spacing={2}>
                                        <Grid item>
                                            <Button
                                                onClick={() => this.onHandleOpen()}
                                                variant="contained"
                                                color="primary"
                                                style={{width:60}}>
                                                Edit
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Button variant="contained" color="secondary"
                                                    onClick={() => this.props.onHandleDelete(todo.id)}
                                                    style={{width:60}}
                                            >
                                                Delete
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                )})}
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        todos: state.todo.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onHandleDelete: (id) => dispatch(deleteTodo(id)),
        onHandleTrigger: (id) => dispatch(triggerTodo(id)),
        onHandleUpdate: (todo) => dispatch(updateTodo(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent);