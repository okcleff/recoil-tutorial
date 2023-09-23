import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoState } from '../state/atoms/TodoState';

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

  return (
    <main>
      <input
        type='text'
        id='todoInput'
        value={inputText}
        onChange={handleInput}
      />
      <button onClick={addTodo}>Add Todo</button>
      <button>Clear Todos</button>

      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>;
        })}
      </ul>
    </main>
  );
};

export default TodoList;
