import {useState} from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"

import AddTask from './AddTask'
const App = () => {
  const[showAddTask, setShowAddTask]= useState(true)

  const [tasks, SetTasks]= useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
      },

      {
        id: 3,
        text: 'Meeting with gf',
        day: 'Feb 6th at 1:30pm',
        reminder: false,
      },

    ])

    //add task
    const addTask =(task) =>{
      const id =Math.floor(Math.random()*10000)+1
      const newTask ={id, ...task}
      SetTasks([...tasks, newTask])
    }

    //Delete Task
    const deleteTask=(id) =>{
     SetTasks(tasks.filter((task) => task.id !==id))
    }
//toogle reminder
const toggleReminder=(id) =>{
  SetTasks(tasks.map((task)=> task.id === id ? 
  {...task, reminder: !task.reminder }
  :task))

}
  return (
    <div className="container">
      
      <Header onAdd={()=> setShowAddTask(!showAddTask)}
      showAdd ={showAddTask}/>
      {showAddTask &&<AddTask onAdd={addTask}/>}
      {tasks.length >0? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      : 'no task to show'}
      
   
    </div>
  )
}

export default App

