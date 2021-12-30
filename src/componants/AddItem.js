
import './componants.css'

const AddItem = ({tasks,reTasks,task,reTask,edit,reEdit})=>{
    
    

    const add = (task)=>{
        if(edit[0] === false)
        {
            reTasks([...tasks,task])
            console.log(tasks)
            reTask('')
        }
        else
        {
            tasks[edit[1]] = task;
            
            reTasks([...tasks])
            reTask('')
            reEdit([false])

            
        }
        
    }
    
    return(
        <div className='add-item'>
            
                <input type = 'text' value = {task} className={edit[2]} onChange={(e)=>reTask(e.target.value)}/>
                <button onClick={()=>add(task)}>Add</button>
                
            
        </div>
    )
}

export default AddItem