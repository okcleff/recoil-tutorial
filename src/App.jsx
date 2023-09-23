import { RecoilRoot } from 'recoil';
import TodoList from './components/TodoList';

function App() {
  return (
    <RecoilRoot>
      <div className='App'>
        <p>Todo List with Recoil</p>
        <TodoList />
      </div>
    </RecoilRoot>
  );
}

export default App;
