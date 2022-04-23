import React from "react";
import {AppUI} from './AppUI';

//custom hook
function useLocalStorage(itemName,initialValue){
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if(!localStorageItem){
    //an empty array is created
    localStorage.setItem(itemName,JSON.stringify(initialValue));
    parsedItem = initialValue;
  }else{
    parsedItem = JSON.parse(localStorageItem);
  }

  //defaultTodos is asigned as value of the state in this case
  //any item 
  const [item,setItem] = React.useState(parsedItem);   

  //param is an array with new todos
  const saveItem = (newItems) => {
    const stringfiedItems = JSON.stringify(newItems);
    localStorage.setItem(itemName,stringfiedItems);
    setItem(newItems);
  };

  return[item,saveItem];
}

function App(props) {
  const [todos,saveTodos] = useLocalStorage('TODOS_V1',[]);


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
    });
  }

  

  //this funcction is called when the
  //check icon is pressed by the user
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    //inyects the old array to this array
    const newTodos = [...todos];
    if(newTodos[todoIndex].completed === false){
    newTodos[todoIndex].completed = true;
    }else{
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
    newTodos.splice(todoIndex,1);
    //now we change the state of the todos
    saveTodos(newTodos);
  };

  return (
   <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
   />
  );
}

export default App;
