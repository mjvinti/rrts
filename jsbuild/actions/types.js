export var ActionTypes;
(function (ActionTypes) {
    ActionTypes[ActionTypes["deleteTodo"] = 0] = "deleteTodo";
    ActionTypes[ActionTypes["fetchTodos"] = 1] = "fetchTodos";
    ActionTypes[ActionTypes["fetchTodosSuccess"] = 2] = "fetchTodosSuccess";
    ActionTypes[ActionTypes["fetchTodosError"] = 3] = "fetchTodosError";
})(ActionTypes || (ActionTypes = {}));
