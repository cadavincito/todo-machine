import React from "react";
import './TodoCounter.css';
import {TodoContext} from '../TodoContext'

function TodoCounter() {
    const {completedTodos,totalTodos} = React.useContext(TodoContext);
    return ( 
        <h2 className="todoCounter">You´ve completed {completedTodos} out of {totalTodos} todos</h2>
    );
}

export {TodoCounter};