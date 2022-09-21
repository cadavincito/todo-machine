import React from "react";
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from "../TodoForm";
import { TodoTitle } from "../TodoTitle";

function AppUI() {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>

      <TodoTitle />
      
      <TodoCounter />

      <TodoSearch />


      <TodoList>
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
      </TodoList>

      {/* double negation to know if the modal exists and if its opened*/}
      {!!openModal && (
        <Modal>
        <TodoForm/>
      </Modal>
      )}

      <CreateTodoButton 
        setOpenModal = {setOpenModal}
        openModal = {openModal}
      />


    </React.Fragment>
  );
}

export { AppUI };