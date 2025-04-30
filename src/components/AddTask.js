
export const AddTask = ({tasklist,setTasklist,task,settask}) => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(task.id)
        {
            const date=new Date();
            const updatetask=tasklist.map((todo)=>(
                todo.id === task.id ? {id:task.id ,name:e.target.task.value,time:`${date.toLocaleTimeString()} ${date.toLocaleDateString() }`}: todo
            ));
            setTasklist(updatetask);
            settask({});
        }
        else
        {
            const date=new Date();
            const newTask={id:date.getTime() , 
                name:e.target.task.value,
                time:`${date.toLocaleTimeString()} ${date.toLocaleDateString() }`
            }
            setTasklist([...tasklist,newTask]);
            settask({});
        }
    }
  return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input type="text"  name="task" value={task.name || ""} onChange={e=> settask({...task,name:e.target.value})} autoComplete="off" placeholder="add Task"/>
            <button type="submit">{task.id ? "Update":"Add"}</button>
        </form>
    </section>
  )
}

