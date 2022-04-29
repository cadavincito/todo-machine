import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm(){

    const [newTodoValue, setNewTodoValue] = React.useState(''); 

    //we import this function from the context
    const {addTodo,setOpenModal} = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };


    return(
        <form onSubmit={onSubmit} >
        <label>Escribe tu nuevo To Do</label>
        <textarea
          value = {newTodoValue}
          onChange = {onChange}
          placeholder = "Escribe una nueva tarea"
        />
        <div className="TodoForm-buttonContainer">
          <button
            type="button"
            className="TodoForm-button TodoForm-button-cancel"
            onClick = {onCancel}
          >
            Cancel
          </button>
  
          <button
            className="TodoForm-button TodoForm-button-add"
            type= "submit"
          >
            Add
            </button>
        </div>
      </form>
    );
}

export { TodoForm };