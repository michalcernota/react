import './App.css';
import Task from "./task";
import {useState} from "react";
import {useEffect} from "react";
import TaskForm from "./taskForm";

function App() {

    //const [tasks, setTasks] = useState([])
    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:3001/tasks')
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                    throw new Error(`Unable to get data: ${response.statusText}`)
                })
                .then(json => setData(json))
                .catch((error) => setError(error.message))
                .finally(() => setIsPending(false))
        }, 1000)

    }, [])

    /*const addTaskHandler = function (task) {
        const newTasks = [...tasks];
        newTasks.push(task);
        setTask(newTasks);
    }*/

    const completeTaskHandler = function (task) {
        const newTasks = [...data];
        const taskIndex = newTasks.findIndex(item => item.id === task.id);
        //console.log("Task to remove index: " + taskIndex);
        newTasks.splice(taskIndex, 1);
        setData(newTasks);
    }

    const onNewTaskHandler = (task) => {
        const newData = [...data];
        newData.push(task);
        setData(newData);
    }

    return (
    <div className="App">
        {<div>{'There are ' + data.length + ' todos.'}</div>}
        {isPending && "Loading data..."}
        {error && <div>{error}</div>}

        {data.map(item => <Task key={item.id} task={item} onClickHandler={completeTaskHandler}/>)}

        <TaskForm onNewTask={onNewTaskHandler}/>

        <footer style={{marginTop: "5%"}}>
            <a href={"https://github.com/michalcernota/react"}>GitHub</a>
        </footer>
    </div>
  );
}

export default App;
