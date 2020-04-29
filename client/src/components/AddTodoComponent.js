import React from "react";

//Material UI
import { withStyles } from "@material-ui/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import {addTodo} from "../actions/todo/todoActions";
import { connect } from "react-redux";
import EditForm from "./EditForm";
import {Modal} from "@material-ui/core";

const styles = (theme) => ({
    root:{
        margin: "10px 0 0 0"
    }
});

class AddTodoComponent extends React.Component{
    state = {
        isOpen: false
    };

    onHandleClickAddButton () {
        this.setState({isOpen: true});
    }

    onHandleClose () {
        this.setState({ isOpen: false});
    }

    render() {
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
                    <EditForm
                        titleInit = {""}
                        noteInit = {""}
                        dateInit = {new Date()}
                        onHandleSubmit = {this.props.onHandleAdd}
                        onHandleClose={() => this.onHandleClose()}
                        buttonName={"Add Todo"}/>
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