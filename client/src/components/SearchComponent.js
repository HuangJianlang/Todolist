import React from "react";
import { findTodo } from "../actions/todo/todoActions";
import { connect } from "react-redux";

//M UI
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

class SearchComponent extends React.Component {
    state = {
        text: ""
    }

    render() {
        return (
            <Paper component="form" style={{margin: "10px 0 10px 0"}}>
                <IconButton aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <InputBase
                    onChange={(e) => {
                        this.setState({text: e.target.value}, () => this.props.onHandleSearch(this.state.text))}
                    }
                    style={{width: "50%"}}
                    placeholder="Search Todo"
                    inputProps={{ 'aria-label': "search todos" }}
                />
                <IconButton style={{float:"right"}} type="submit" aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onHandleSearch: (title) => dispatch(findTodo(title))
    }
}

export default connect(null, mapDispatchToProps)(SearchComponent);