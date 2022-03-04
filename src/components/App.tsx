import React from 'react';
import { connect } from 'react-redux';

import { deleteTodo, DeleteTodoAction, fetchTodos, Todo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
    deleteTodo: typeof deleteTodo;
    fetching: boolean;
    fetchTodos: Function;
    todos: Todo[];
}

interface AppState {
    fetching: boolean;
    todos: Todo[];
}

function _App({ deleteTodo, fetching, fetchTodos, todos }: AppProps) {
    const onButtonClick = (): void => fetchTodos();
    const onTodoClick = (id: number): DeleteTodoAction => deleteTodo(id);
    const renderList = (): JSX.Element[] => todos.map((todo: Todo) => (
        <div onClick={() => onTodoClick(todo.id)} key={todo.id}>
            {todo.title}
        </div>
    ));

    return (
        <div>
            <button onClick={onButtonClick}>Fetch</button>
                {fetching ? 'LOADING' : null}
                {renderList()}
        </div>
    );
}

const mapStateToProps = ({ todos }: StoreState): AppState => {
    return { todos: todos.todos, fetching: todos.fetching };
};

export const App = connect(
    mapStateToProps,
    { deleteTodo, fetchTodos }
)(_App);