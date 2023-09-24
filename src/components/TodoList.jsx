import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoState } from '../state/atoms/TodoState';
import Todo from './Todo';

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todoState);
  const [inputText, setInputText] = useState('');

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const addTodo = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random(), text: inputText },
    ]);

    setInputText('');
  };

  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <main>
      <input
        type='text'
        id='todoInput'
        value={inputText}
        onChange={handleInput}
      />
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={clearTodos}>Clear Todos</button>

      <ul>
        {todos.map((todo) => {
          return <Todo key={todo.id} text={todo.text} id={todo.id} />;
        })}
      </ul>
    </main>
  );
};

export default TodoList;
