import axios from 'axios';
import { Dispatch } from 'redux';

import { ActionTypes } from './types';

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export interface FetchTodosAction {
    type: ActionTypes.fetchTodos;
}

export interface FetchTodosSuccessAction {
    type: ActionTypes.fetchTodosSuccess;
    payload: Todo[];
}

export interface FetchTodosErrorAction {
    type: ActionTypes.fetchTodosError;
}

export interface DeleteTodoAction {
    type: ActionTypes.deleteTodo;
    payload: number;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        dispatch<FetchTodosAction>({ type: ActionTypes.fetchTodos });
        try {
            const response = await axios.get<Todo[]>(url);
            dispatch<FetchTodosSuccessAction>({
                type: ActionTypes.fetchTodosSuccess,
                payload: response.data
            });
        } catch (err) {
            dispatch<FetchTodosErrorAction>({ type: ActionTypes.fetchTodosError });
        }
        
    };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
    return {
        type: ActionTypes.deleteTodo,
        payload: id
    };
}