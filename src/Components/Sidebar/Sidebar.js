import React from "react";
import SidebarElement from "./SidebarElement";
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
                icon="fas fa-search"
                name="Search"
                link="/search"
                url={props.url}
                setUrl={props.setUrl}
            />
            <SidebarElement
                icon="fas fa-arrow-circle-up"
                name="Upload"
                link="/upload"
                url={props.url}
                setUrl={props.setUrl}
            />
            <SidebarElement
                icon="fas fa-user"
                name="Profile"
                link="/profile"
                url={props.url}
                setUrl={props.setUrl}
            />
            <h3>Account</h3>
            <SidebarAccount character="B" name="stterben" url={props.url} />
            <SidebarElement
                icon="fas fa-arrow-alt-circle-right"
                name="Log out"
                link=""
            />
        </div>
    );
}
