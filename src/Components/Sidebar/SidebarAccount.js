import React from "react";
import UserLogo from "../UserLogo";

export default function SidebarAccount(props) {
    return (
        <div className="sidebarElement">
            <UserLogo name={props.character} />
            <p>{props.name}</p>
        </div>
    );
}
