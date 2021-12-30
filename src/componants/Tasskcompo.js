import './componants.css'

function removeItemOfList(list,indexing)
{
    let newList =[];
    
    for (let i = 0; i < list.length; i++)
    {
        if( i !== indexing)
        {
            newList.push(list[i])
        }
    }
    return newList
}



const Taskcompo = ({tasks,reTasks,reTask,reEdit,edit})=>{
    const removing = (index)=>{
       let newTasks = removeItemOfList(tasks,index)
       reTasks([...newTasks])
    }

    function editing(value,index)
    {
        reTask(value)
        let newEdit = [true,index,'editing']
        reEdit([...newEdit])
    }
    return(
        <ul className='task-compo'>
            {
                tasks.map((v,i)=>{return(
                    <div key={i}>
                        <li onClick={(e)=>{editing(v,i)}} >{v}</li>
                        <button onClick={()=>removing(i)}>X</button>
                    </div>
                ) })
            }
        </ul>
    )
}

export default Taskcompo