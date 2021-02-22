import React from "react";
import "../../Style/sidebar.css";
import { Link } from "react-router-dom";

export default function SidebarElement(props) {
    return (
        <Link
            to={props.link}
            className={
                (props.url === props.link && props.url) ||
                (props.altLink !== undefined && props.altLink === props.url)
                    ? "sidebarElement selected"
                    : "sidebarElement"
            }
        >
            <div className="icon">
                <i className={props.icon}></i>
            </div>
            <p>{props.name}</p>
        </Link>
    );
}
