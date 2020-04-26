import React from 'react';
import TodoComponent from "./components/TodoComponent";
import ChangeTodoComponent from "./components/ChangeTodoComponent";
import {connect} from "react-redux";
import {findAll} from "./actions/todo/todoActions";
import UpdateTodoComponent from "./components/UpdateTodoComponent";


import { withStyles } from "@material-ui/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AddTodoComponent from "./components/AddTodoComponent";

const styles = (theme) => ({
    root: {
        backgroundColor: "#FFF",
        width: 500,
        position: 'relative',
        minHeight: 200,
    },
})
class App extends React.Component {
    componentDidMount() {
        this.props.findAll()
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="sm">
                    <div className={this.props.root}>
                        {/*<ChangeTodoComponent/>*/}
                        <TodoComponent/>
                        {/*<UpdateTodoComponent />*/}
                        <AddTodoComponent />
                    </div>
                </Container>
            </React.Fragment>
        )
    }
}

//dispatch ALWAYS need actionCreator
const mapDispatchToProps = (dispatch) => ({
    findAll: () => dispatch(findAll())
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(App));
