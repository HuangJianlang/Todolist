import React from "react";
import { connect } from "react-redux";
import {addTodo, deleteTodo, findTodo, triggerTodo} from "../actions/todo/todoActions";

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

class TodoComponent extends React.Component{

    render() {
        return(<div className={{width: '100%'}}>
                {this.props.todos.map((todo) => (
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
                                            <Typography variant="h6" color="textPrimary">
                                                Note: {todo.note}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="h6" color="textPrimary">
                                                Due: {todo.scheduleTime}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container direction="column" alignItems="flex-end" spacing={2}>
                                        <Grid item>
                                            <Button variant="contained" color="primary" style={{width:60}}>
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
                ))}
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
        onHandleTrigger: (id) => dispatch(triggerTodo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent);