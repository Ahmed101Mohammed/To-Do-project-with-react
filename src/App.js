import AddItem from "./componants/AddItem";
import {useState} from 'react'
import Taskcompo from './componants/Tasskcompo'
import './App.css'

function App() {
  const [tasks,reTasks] = useState([])
  const [task,reTask] = useState('')
  const [edit,reEdit] = useState([false])

  return (
    <div className='container'>
      <AddItem tasks={tasks} reTasks={reTasks} task = {task} reTask = {reTask} edit={edit} reEdit={reEdit}/>
      <hr/>
      <Taskcompo tasks={tasks} reTasks={reTasks} reTask = {reTask} edit={edit} reEdit={reEdit}/>
      
    </div>
  );
}

export default App;
