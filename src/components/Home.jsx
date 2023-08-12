
import React from "react";
import "./Home.css";
import Task from "./Task";

const Home = () => {
    const initialArray = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];

    const [tasks, setTasks] = React.useState(initialArray);
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        const newTask = { title, description };
        setTasks([...tasks, newTask]);
    };

    React.useEffect(() => {
        localStorage.setItem("tasks",JSON.stringify(tasks));
    }, [tasks]);



    const deleteTask = (index) => {
        const filteredTasks = tasks.filter((item, i) => i !== index);
        setTasks(filteredTasks);
    };

    return (
        <div className="container">
            <h1>Daily Goals</h1>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="Tasks"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <button type="submit">ADD</button>
            </form>
            {tasks.map((item,index) => (
                <Task key = {index} title={item.title} description={item.description}
                deleteTask={deleteTask} 
                index={index}
                />
            ))}
        </div>
    );
};

export default Home;
