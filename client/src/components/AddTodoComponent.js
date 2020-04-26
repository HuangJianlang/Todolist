import React from "react";

//Material UI
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { withStyles } from "@material-ui/styles";
import { Modal, TextField, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import {addTodo} from "../actions/todo/todoActions";
import { connect } from "react-redux";

const styles = (theme) => ({
    root:{
        margin: "10px 0 0 0"
    },
    paper:{
        position: "relative",
        width: 300,
        height: 300,
        backgroundColor:"#FFF"
    },
    formItem:{
        width: 150
    }
});

class AddTodoComponent extends React.Component{
    state = {
        date: new Date(),
        isOpen: false
    };

    onHandleClickAddButton () {
        this.setState({isOpen: true});
    }

    onHandleClose () {
        this.setState({ isOpen: false});
    }

    render() {
        let titleInput;
        let noteInput;
        return (
            <div className={this.props.classes.root}>
                <Fab size="small" color="primary" aria-label="Add Todo" onClick={() => this.onHandleClickAddButton()}>
                    <AddIcon />
                </Fab>
                <Modal
                    open={this.state.isOpen}
                    onClose={() => this.onHandleClose()}
                    aria-labelledby="Add Todo"
                    aria-describedby="simple-modal-description"
                    style={{display:'flex',alignItems:'center',justifyContent:'center'}}
                >
                    <form
                        className={this.props.classes.paper}
                        onSubmit={(e) => {
                            e.preventDefault();
                            this.props.onHandleAdd(titleInput.value, noteInput.value, this.state.date)
                            titleInput.value = ""
                            noteInput.value = ""}}>
                        <Grid container direction="column" alignItems="center" justify="center">
                            <Grid container direction="column" alignItems="center" spacing={5}>
                                <Grid item>
                                    <TextField
                                        id={"todo-titile"}
                                        label={"Title"}
                                        inputRef={node => titleInput = node}
                                        className={this.props.classes.formItem}
                                        style={{margin: "10px 0 -20px 0"}}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        id={"todo-note"}
                                        label={"Note"}
                                        inputRef={node => noteInput = node}
                                        className={this.props.classes.formItem}
                                    />
                                </Grid>
                                <Grid item>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            onChange={(date) => this.setState({ date })}
                                            value={this.state.date}
                                            className={this.props.classes.formItem}
                                        />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item>
                                    <Button type="submit" color="primary" variant="contained">
                                        Add Todo
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </Modal>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onHandleAdd: (title, note, date) => dispatch(addTodo(title, note, date))
    }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(AddTodoComponent));