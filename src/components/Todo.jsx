import React from 'react';
import { useSetRecoilState } from 'recoil';
import { todoState } from '../state/atoms/TodoState';

const Todo = ({ text, id }) => {
  const setTodos = useSetRecoilState(todoState);

  const deleteTodo = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <li>
      <p>{text}</p>
      <button onClick={deleteTodo}>delete</button>
    </li>
  );
};

export default Todo;
