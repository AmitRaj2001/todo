import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <nav>Get ready to compleate your daily task</nav>
        <div className="Newheader">
                <Link  to="/">Home</Link>
                <Link  to="/about">About</Link> 
                <Link  to="/contact">Contact</Link> 
                <Link  to="/login">Login</Link>
        </div>
        </>
    );
};

export default Navbar;
