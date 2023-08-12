import React from "react";
import "./Home.css";

const Home = () => {
    return <div className="container">
        <h1>Daily Goals</h1>
        <form >
            <input type="text" placeholder="Tasks"/>
            <textarea placeholder="Description"></textarea>
            <button type="submit">ADD</button>
        </form>
    </div>;
};

export default Home;
