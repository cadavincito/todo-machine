import React from 'react';
import './TodoItem.css';

function TodoItem(props) {

const onComplete = ()  => {
  alert(props.text + ' completed');
};

const onDelete = ()  => {
  alert(props.text + ' deleted');
};

  return (
    <li className="TodoItem">
      <span onClick={props.onComplete}  className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
        √
      </span>
      {/* si se cumple la condición de props, la clase pasa a ser TodoItem-p--complete y el texto aparece rayado*/}
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span onClick={props.onDelete} className="Icon Icon-delete">
        X
      </span>
    </li>
  );
}

export { TodoItem };