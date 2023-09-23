import React from 'react';

const TodoList = () => {
  return (
    <form>
      <input type='text' id='todoInput' />
      <button>Add Todo</button>
      <button>Clear Todos</button>
    </form>
  );
};

export default TodoList;
