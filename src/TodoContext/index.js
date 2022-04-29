import React from "react";
import {useLocalStorage} from './useLocalStorage'

//since createContext() returns and object with 
//properties
const TodoContext = React.createContext();

function TodoProvider(props){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
    
    
      const [searchValue, setSearchValue] = React.useState('');
      // state for ontrolling the modal
      const [openModal, setOpenModal] = React.useState(false);
    
      const completedTodos = todos.filter(todo => todo.completed === true).length;
      const totalTodos = todos.length;
    
      //this is the part about filtering the todo by the stuff typed 
      // in the input box
      let searchedTodos = [];
    
      if (!searchValue.length >= 1) {
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          //asks if the todoText has the searchText string in it
          return todoText.includes(searchText);
        });
      }
    
      //Add todo
      //this funcction is called when the
      //check icon is pressed by the user
      const addTodo = (text) => {
        //inyects the old array to this array
        const newTodos = [...todos];
        newTodos.push({
          completed:false,
          text,
        });
        //now we change the state of the todos
        saveTodos(newTodos);
      };
    
    
      //this funcction is called when the
      //check icon is pressed by the user
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        //inyects the old array to this array
        const newTodos = [...todos];
        if (newTodos[todoIndex].completed === false) {
          newTodos[todoIndex].completed = true;
        } else {
          newTodos[todoIndex].completed = false;
        }
        //now we change the state of the todos
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        //inyects the old array to this array
        const newTodos = [...todos];
        //takes out the desired element
        newTodos.splice(todoIndex, 1);
        //now we change the state of the todos
        saveTodos(newTodos);
      };

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            addTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};