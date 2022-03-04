import { combineReducers } from 'redux';
import { todosReducer } from './todos';
export var reducers = combineReducers({
    todos: todosReducer
});
