import React from "react";

export default function Navbar(props) {
    // console.log(props.destination)
    return (
        <div className="navbar-container">
            <div className="navbar">
                <i className="fa-solid fa-earth-africa" style={{color:"white"}}></i>
                <span>my travel journal.</span>
            </div>
        </div>
    )
}