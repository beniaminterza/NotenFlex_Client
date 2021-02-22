import React from "react";
import SidebarElement from "./SidebarElement";
import SidebarButton from "./SidebarButton";
import SidebarAccount from "./SidebarAccount";
import logo from "../../Photos/logo.svg";

export default function Sidebar(props) {
    function closeHandler() {
        props.setBarStatus("close");
        props.setMenueStatus("open");
    }
    return (
        <div className={`sidebar ${props.barStatus}`}>
            <h2 className="back" onClick={closeHandler}>
                x
            </h2>
            <div className="menueIcon">
                <h4>Menu</h4>
            </div>
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
                closeHandler ={closeHandler}
            />
            <SidebarElement
                icon="fas fa-arrow-circle-up"
                name="Upload"
                link="/upload"
                url={props.url}
                setUrl={props.setUrl}
                closeHandler ={closeHandler}
            />
            <SidebarElement
                icon="fas fa-user"
                name="Profile"
                link={`/profile/${props.user}`}
                altLink="/profile"
                url={props.url}
                closeHandler ={closeHandler}
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
