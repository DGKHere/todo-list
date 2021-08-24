import React from 'react';
import ToDoListItem from "./ToDoListItem";

const ToDoList = ({showToDoListItems, setToDoListItems}) => {

    return (
        <ul className="todo__list">
            {showToDoListItems.map(toDoListItem =>
                <ToDoListItem key={toDoListItem.id} toDoListItem={toDoListItem} setToDoListItems={setToDoListItems} />
            )}
        </ul>
    );
};

export default ToDoList;