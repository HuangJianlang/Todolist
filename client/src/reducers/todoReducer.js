import * as actions from "../actions/todo/actionType";

const DEFAULT_STATE = {
    todos: []
}

const todoReducer = (state=DEFAULT_STATE, action) => {
    switch (action.type) {
        case actions.FIND_ALL:
            return { todos: action.todos }

        case actions.TRIGGER_TODO:
            const copyTodos = [...state.todos]
            for(let i=0; i<copyTodos.length; i++){
                if(copyTodos[i].id == action.id){
                    copyTodos[i].completed = ! copyTodos[i].completed;
                }
            }
            return { todos: copyTodos }
        default:
            return state
    }
}

export default todoReducer;