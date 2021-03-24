import React, { Component } from 'react';
import TodoItem from "./TodoItem";

class TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, onToggle, onRemove} = this.props;

        const todoList = todos.map(
            ({id, text, checked, color}) => (
                <TodoItem
                    id = {id}
                    text = {text}
                    checked={checked}
                    color = {color}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id} //배열 렌더링할때는 키값이 필요함.
                />
            )
        )
        return (
            <div>
                {todoList}
            </div>
        )
    }
}

export default TodoItemList;