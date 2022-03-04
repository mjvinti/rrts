import { DeleteTodoAction, FetchTodosAction, FetchTodosSuccessAction, FetchTodosErrorAction } from './todos';

export enum ActionTypes {
    deleteTodo,
    fetchTodos,
    fetchTodosSuccess,
    fetchTodosError
}

export type Action = DeleteTodoAction | FetchTodosAction | FetchTodosSuccessAction | FetchTodosErrorAction;