import './App.css';
import React from 'react';
import {useState} from 'react';
import {Task} from './Task.js';

   
function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("")

  const manageChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const task = {
      taskName : newTask,
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      completed: false,
    }

    setTodoList([...todoList, task])
  }
  const deleteTask = (id) => {
    setTodoList(todoList.filter((work) => work.id !== id))
  }
  const completeTask = (id) => {
    setTodoList(todoList.map((work) => {
        if (work.id ===id) {
          return {...work, completed : true}
        }
        else{
          return work;
        }
    }))
  }
  return(
    <div className="App">
      <div className = "addTask">
        <input type="text" onChange={manageChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className = "list">
       {todoList.map((task) => {
         return <Task taskName = {task.taskName} 
                      id = {task.id} 
                      completed = {task.completed}
                      deleteTask={deleteTask} 
                      completeTask = {completeTask}/>
       })}
      </div>
    </div>
  )
}

export default App;