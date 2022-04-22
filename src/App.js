import React from "react";
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';

const defaultTodos = [
  {text:"pipi", completed: true},
  {text:"popo", completed: true},
  {text:"jeje", completed: false}
];

function App(props) {

  //defaultTodos is asigned as value of the state in this case
  //'todos'
  const [todos,setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed === true).length;
  const totalTodos = todos.length;

  //this is the part about filtering the todo by the stuff typed 
  // in the input box
  let searchedTodos = [];

  if (!searchValue.length >= 1){
      searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      //asks if the todoText has the searchText string in it
      return todoText.includes(searchText);
    })
    
  }

  return (
   <React.Fragment>
     <TodoCounter
     completedTodos = {completedTodos}
      totalTodos = {totalTodos}
     />

     <TodoSearch
     searchValue = {searchValue}
     setSearchValue = {setSearchValue}
     />
   
    
   <TodoList/>
     {searchedTodos.map(todo => (
       <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
       />
     ))}
   

   <CreateTodoButton/>

   
   </React.Fragment>
  );
}

export default App;
