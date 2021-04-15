import {useState} from "react";

function TaskForm(props) {

    const [taskDescription, setDescription] = useState("")

    const onSubmitHandler = event => {

        event.preventDefault()

        const newTask = {
            description: taskDescription
        }

        fetch('http://localhost:3001/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
            .then(r => r.json())
            .finally(() => {
                props.onNewTask(newTask);
                setDescription("");
            });
    }

    return (
        <form style={{width:"80%", margin: "auto" }} onSubmit={onSubmitHandler}>
            <input style={{width: "90%"}} type={"text"} value={taskDescription} onChange={(e) => setDescription(e.target.value)}/>
            <input style={{width: "5%", marginLeft: "1%"}} type={"submit"} value={"Add"}/>
        </form>
    )
}

export default TaskForm;