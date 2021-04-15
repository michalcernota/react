
function Task({task, onClickHandler}) {
    return(
        <div style={{
            width: "80%",
            margin: "1% auto",
            padding: "1%",
            borderColor: "gray",
            borderWidth: "1px",
            borderStyle: "solid",
            borderRadius: "5px",
            overflow: "hidden"
        }}>
            <div style={{float: "left"}}>{task.description}</div>
            <button style={
                {
                    float: "right",
                    backgroundColor:"green",
                    color: "white"
                }
            } onClick={() => (onClickHandler(task))}>Complete</button>
        </div>
    );
}

export default Task;