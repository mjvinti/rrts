var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { ActionTypes } from '../actions';
;
var initialState = {
    todos: [],
    fetching: false
};
export var todosReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ActionTypes.fetchTodos:
            return __assign(__assign({}, state), { fetching: true });
        case ActionTypes.fetchTodosSuccess:
            return __assign(__assign({}, state), { todos: action.payload, fetching: false });
        case ActionTypes.fetchTodosError:
            return initialState;
        case ActionTypes.deleteTodo:
            return __assign(__assign({}, state), { todos: state.todos.filter(function (todo) { return todo.id !== action.payload; }) });
        default:
            return state;
    }
};
