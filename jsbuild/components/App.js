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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { connect } from 'react-redux';
import { deleteTodo, fetchTodos } from '../actions';
function _App(_a) {
    var deleteTodo = _a.deleteTodo, fetching = _a.fetching, fetchTodos = _a.fetchTodos, todos = _a.todos;
    var onButtonClick = function () { return fetchTodos(); };
    var onTodoClick = function (id) { return deleteTodo(id); };
    var renderList = function () { return todos.map(function (todo) { return (_jsx("div", __assign({ onClick: function () { return onTodoClick(todo.id); } }, { children: todo.title }), todo.id)); }); };
    return (_jsxs("div", { children: [_jsx("button", __assign({ onClick: onButtonClick }, { children: "Fetch" }), void 0), fetching ? 'LOADING' : null, renderList()] }, void 0));
}
var mapStateToProps = function (_a) {
    var todos = _a.todos;
    return { todos: todos.todos, fetching: todos.fetching };
};
export var App = connect(mapStateToProps, { deleteTodo: deleteTodo, fetchTodos: fetchTodos })(_App);
