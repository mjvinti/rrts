import {
    Action,
    ActionTypes,
    Todo
} from '../actions';

export interface TodosState {
    todos: Todo[],
    fetching: boolean
};

const initialState: TodosState = {
    todos: [],
    fetching: false
};

export const todosReducer = (
    state: TodosState = initialState,
    action: Action
) => {
    switch (action.type) {
        case ActionTypes.fetchTodos:
            return { ...state, fetching: true };
        case ActionTypes.fetchTodosSuccess:
            return {
                ...state,
                todos: action.payload,
                fetching: false
            };
        case ActionTypes.fetchTodosError:
            return initialState;
        case ActionTypes.deleteTodo:
            return {
                ...state,
                todos: state.todos.filter((todo: Todo) => todo.id !== action.payload)
            };
        default:
            return state;
    }
};