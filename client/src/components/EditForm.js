import React from "react";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {Button, Modal, TextField} from "@material-ui/core";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const styles = (theme) => ({
    paper:{
        position: "relative",
        width: 300,
        height: 300,
        backgroundColor:"#FFF"
    },
    formItem:{
        width: 150
    }
})

class EditForm extends React.Component{
    constructor(props) {
        super(props);
    }

    state = {
        title: this.props.titleInit,
        note: this.props.noteInit,
        date: this.props.dateInit
    }

    render() {
        return(
            <form
                tabIndex={-1}
                className={this.props.classes.paper}
                onSubmit={(e) => {
                    e.preventDefault();
                    this.props.onHandleSubmit(this.state.title, this.state.note, this.state.date);
                    this.props.onHandleClose();
                }}>
                <Grid container direction="column" alignItems="center" justify="center">
                    <Grid container direction="column" alignItems="center" spacing={5}>
                        <Grid item>
                            <TextField
                                className={this.props.classes.formItem}
                                style={{margin: "10px 0 -20px 0"}}
                                label={"Title"}
                                onChange={(e) => {
                                    this.setState({title: e.target.value})
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                className={this.props.classes.formItem}
                                label={"Note"}
                                onChange={(e) => {
                                    this.setState({note: e.target.value})
                                }}
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
                                {this.props.buttonName}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        )
    }
}


export default withStyles(styles)(EditForm);