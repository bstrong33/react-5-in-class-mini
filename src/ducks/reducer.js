const initialState = {
    todos: []
}

// ACTION TYPES
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

//ACTION CREATORS
export function addTodo(newTodo) {
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}

export function deleteToDo(i) {
    return {
        type: REMOVE_TODO,
        payload: i
    }
}

// REDUCER
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]}
        case REMOVE_TODO:
            let updatedTodos = state.todos.filter( (todo, i) => {
                return i !== action.payload
            })
            return {todos: updatedTodos}
        default:
            return state;
    }
}