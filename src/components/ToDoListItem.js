import React from 'react';

const ToDoListItem = ({toDoListItem, setToDoListItems}) => {

    const deleteItem = () => {
        setToDoListItems(state => [...state].filter(item => item.id !== toDoListItem.id))
    }

    const markCompleted = () => {
        setToDoListItems(state => {
            const newState = [...state]
            newState.find(item => item.id === toDoListItem.id).completed = true
            return [...newState]
        })
    }

    return (
        <li className={toDoListItem.completed ? "todo__list-item completed" : "todo__list-item"}>
            <div className="todo__list-item-left">
                <button
                    onClick={markCompleted}
                    className="icon-button"
                >
                    <i className="far fa-check-circle todo-icon"/>
                </button>
                <span>{toDoListItem.value}</span>
            </div>
            <div className="todo__list-item-right">
                <span>{toDoListItem.date}</span>
                <button
                    onClick={deleteItem}
                    className="icon-button"
                >
                    <i className="fas fa-shopping-basket todo-icon"/>
                </button>
            </div>
        </li>
    );
};

export default ToDoListItem;