import axios from "axios";
import {ADD_TODO, DELETE_TODO, FIND_TODO, UPDATE_TODO, FIND_ALL, TRIGGER_TODO} from "./actionType";

export const addTodo = (title, note, date) => async (dispatch) => {
    console.log(date.toLocaleDateString())
    const response = await axios.post(
        "/api/todo/add", {
            title: title,
            note: note,
            date: date.toLocaleDateString()
        })
    dispatch({
        type: FIND_ALL,
        todos: response.data
    })
}

export const deleteTodo = (id) => async (dispatch) => {
    const response = await axios.post("/api/todo/delete", { id })
    dispatch({
        type: FIND_ALL,
        todos: response.data
    })
}

export const findTodo = (title) => async (dispatch) => {
    const response = await axios.post("/api/todo/find", { title });
    dispatch({
        type: FIND_ALL,
        todos: response.data
    })
}

export const findAll = () => async (dispatch) => {
    const response = await axios.get("/api/todo/all");
    dispatch({
        type: FIND_ALL,
        todos: response.data
    })
}

export const updateTodo = (todos) => async (dispatch) => {
    const res = await axios.post("/api/todo/update", todos)
    dispatch({
        type: UPDATE_TODO
    })
}

export const triggerTodo = (id) => ({
    type: TRIGGER_TODO,
    id: id
})
