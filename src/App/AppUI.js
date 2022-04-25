import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
  //this variables
  // are for simulating the API call by this app.
  loading,
  error,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <React.Fragment>
      <TodoCounter
        completedTodos={completedTodos}
        totalTodos={totalTodos}
      />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />


      <TodoList />
      {error && <p>Desespérate, hubo un error...</p>}
      {loading && <p>Estamos cargando, no desesperes...</p>}
      {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

      {searchedTodos.map(todo => (
        <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
      ))}


      <CreateTodoButton />


    </React.Fragment>
  );
}

export { AppUI };