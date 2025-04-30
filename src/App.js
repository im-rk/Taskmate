import './App.css';
import {useState,useEffect} from "react";
import {Header} from "./components/Header";
import {AddTask} from "./components/AddTask";
import {ShowTask} from "./components/ShowTask";


function App() {
  const[tasklist,setTasklist ]=useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  const[task,settask]=useState({});
  useEffect(()=>{
    localStorage.setItem("tasklist",JSON.stringify(tasklist))
  },[tasklist]);
  return (
    <div className="App">
        <Header />
        <AddTask tasklist={tasklist} setTasklist={setTasklist} task={task} settask={settask}/>
        <ShowTask tasklist={tasklist} 
        setTasklist={setTasklist}
        task={task}
        settask={settask}
        />
    </div>
  );
}









export default App;
