import React from "react";
import "../../Style/sidebar.css";
import { Link } from "react-router-dom";

export default function SidebarElement(props) {
    function changeUrl() {
        if (props.setUrl) {
            console.log(props.link);
            props.setUrl(props.link);
        }
    }

    return (
        <Link
            to={props.link}
            className={
                props.url === props.link && props.url
                    ? "sidebarElement selected"
                    : "sidebarElement"
            }
            onClick={changeUrl}
        >
            <div className="icon">
                <i className={props.icon}></i>
            </div>
            <p>{props.name}</p>
        </Link>
    );
}
