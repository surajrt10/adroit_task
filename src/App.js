import './App.css';
import {useState} from 'react'
import TodoList from './TodoList';
import AddTask from './AddTask';
function App() {
  const [Todos, setTodos] = useState([
    {
      id:1,
      task:'pending task 1',
      done:false
    }
  ])
  return (
    <div className="App">
      <h1>Task List</h1>
      <p>double click on list item to mark it done</p>
      <p>Click on X to delete Task Item</p>
      
        <AddTask setTodos={setTodos}/>
        <h3>-------------------</h3>
        <TodoList setTodos={setTodos} Todos={Todos}/>

    </div>
  );
}

export default App;
