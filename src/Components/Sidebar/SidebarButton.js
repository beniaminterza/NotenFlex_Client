import React from "react";
import "../../Style/sidebar.css";

export default function SidebarButton(props) {
    function logOut() {
        localStorage.setItem("password", "");
        localStorage.setItem("username", "");
        window.location.replace(window.location.pathname+"#/login");
    }

    return (
        <div className="sidebarElement" onClick={logOut}>
            <div className="icon">
                <i className={props.icon}></i>
            </div>
            <p>{props.name}</p>
        </div>
    );
}
