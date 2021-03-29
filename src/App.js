import { useState } from 'react';
import Header from "./components/Header"
import Tasks from "./components/Tasks"

const App = () => {
  const [tasks, setTasks] = useState(
    [
        {
        id:1,
        Text: 'Doctor Appointmen',
        day: 'feb 12th at 2:30',
        reminder: true,
    },
    {
        id:2,
        Text: 'Meeting at School',
        day: 'feb 12th at 2:30',
        reminder: true,
    },
    {
        id:3,
        Text: 'Food Shopping',
        day: 'feb 5th at 2:30',
        reminder: false,
    },
    
    ])

    //delete Task 
    const deleteTask = (id)=>{ 
      console.log('deleted',id)
      
    }
  return (
    <div className ="container">
     
     
     <Header />
     <Tasks tasks={tasks} onDelete={deleteTask}/>
    
      
    </div>
  );
}

export default App;
