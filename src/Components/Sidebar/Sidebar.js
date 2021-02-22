import React from "react";
import SidebarElement from "./SidebarElement";
import SidebarButton from "./SidebarButton";
import SidebarAccount from "./SidebarAccount";
import logo from "../../Photos/logo.svg";

export default function Sidebar(props) {
    return (
        <div className="sidebar">
            <div className="logoContainer">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="linie"></div>
            <h3>Menu</h3>
            <SidebarElement
                icon="fas fa-home"
                name="Home"
                link="/"
                url={props.url}
                setUrl={props.setUrl}
            />
            <SidebarElement
                icon="fas fa-arrow-circle-up"
                name="Upload"
                link="/NotenFlex_Client/upload"
                url={props.url}
                setUrl={props.setUrl}
            />
            <SidebarElement
                icon="fas fa-user"
                name="Profile"
                link={`/NotenFlex_Client/profile/${props.user}`}
                altLink="/NotenFlex_Client/profile"
                url={props.url}
                setUrl={props.setUrl}
            />
            <h3>Account</h3>
            <SidebarAccount character="B" name={props.user} url={props.url} />
            <SidebarButton
                icon="fas fa-arrow-alt-circle-right"
                name="Log out"
            />
        </div>
    );
}
