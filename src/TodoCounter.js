import React from "react";
import './TodoCounter.css';

function TodoCounter({completedTodos, totalTodos}) {
    return ( 
        <h2 className="todoCounter">You´ve completed {completedTodos} out of {totalTodos} todos</h2>
    );
}

export {TodoCounter};