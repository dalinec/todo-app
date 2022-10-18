import { Routes, Route } from 'react-router-dom';

import Home from './components/home/home.component';
import TodoList from './components/todoList/todo-list.component';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' index element={<TodoList />}></Route>
        {/* <Route path='/home' element={<Home />}></Route> */}
      </Routes>
    </>
  );
};
export default App;
