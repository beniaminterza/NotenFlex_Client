import React, { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./Style/basic.css";
import "./Style/home.css";
import Home from "./Components/Main/Home";
import Upload from "./Components/Upload/Upload";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/SignIn/SignIn";
import Register from "./Components/SignIn/Register";
import axios from "axios";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
    const [url, setUrl] = useState(window.location.pathname);
    const [user, setUser] = useState();
    const [checkServer, setCheckServer] = useState(false);
    const [barStatus, setBarStatus] = useState("close");
    const [menueStatus, setMenueStatus] = useState("open");

    useEffect(() => {
        console.log("Check Server");
        if (!url.includes("/login") && !url.includes("/register")) {
            if (!loadLocalStorage()) {
                console.log("it should redirect !!");
                redirect();
            } else {
                setUser(localStorage.getItem("username"));
                let username = localStorage.getItem("username");
                let password = localStorage.getItem("password");
                axios
                    .get(
                        `http://localhost:9998/NFlex/checkLogin?user=${username}&password=${password}`
                    )
                    .then(
                        (response) => {
                            let data = response.data;
                            if (!data.status) {
                                redirect();
                            } else console.log("Jooooooo");
                        },
                        (error) => {
                            setTimeout(
                                () => setCheckServer((prev) => !prev),
                                2000
                            );
                        }
                    );
            }
        }
    }, [checkServer]);

    function redirect() {
        //window.location.replace(window.location.pathname + "#/login");
        window.location.replace("#/login");
    }

    function loadLocalStorage() {
        if (
            localStorage.getItem("username") !== "undefined" &&
            localStorage.getItem("username") !== "" &&
            localStorage.getItem("password") !== "undefined" &&
            localStorage.getItem("password") !== ""
        ) {
            console.log("No redirect");
            return true;
        }
        console.log("redirect");
        return false;
    }

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="app">
                <Sidebar
                    url={url}
                    setUrl={setUrl}
                    user={user}
                    barStatus={barStatus}
                    setBarStatus={setBarStatus}
                    setMenueStatus={setMenueStatus}
                />
                <div
                    className={`menueIcon ${menueStatus}`}
                    onClick={() => {
                        setMenueStatus("close");
                        setBarStatus("open");
                    }}
                >
                    <h4>Menue</h4>
                </div>
                <Switch>
                    <Route path="/" exact>
                        <Home setUrl={setUrl} />
                    </Route>
                    <Route path="/upload" exact>
                        <Upload setUrl={setUrl} />
                    </Route>
                    <Route
                        path="/profile/:id"
                        exact
                        render={(props) => (
                            <Profile setUrl={setUrl} {...props} />
                        )}
                    />
                    <Route path="/login" exact>
                        <Login setUser={setUser} />
                    </Route>
                    <Route path="/register" exact>
                        <Register setUser={setUser} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
