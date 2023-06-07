import { useState } from 'react'


//custom components
import CustomForm from './component/CustomForm'
import TaskList from './component/TaskList'

function App() {
  const [tasks, setTasks] = useState([])
  const addTask = (task) => {

    setTasks(prevState => [...prevState, task])
  }
  return (
    <div className = "container">
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm addTask = {addTask} />
      {tasks && <TaskList tasks = {tasks}/>} 
      
    </div>
  )
}

export default App
