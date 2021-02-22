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

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
    const [url, setUrl] = useState(window.location.pathname);
    const [user, setUser] = useState();
    const [checkServer, setCheckServer] = useState(false)
    
    useEffect(() => {
        console.log("Check Server")
        if (url !== "/NotenFlex_Client/login" && url !== "/NotenFlex_Client/register") {
            if (!loadLocalStorage()) {
                redirect();
            } else {
                setUser(localStorage.getItem("username"));
                let username = localStorage.getItem("username");
                let password = localStorage.getItem("password");
                axios
                    .get(
                        `http://localhost:9998/NFlex/checkLogin?user=${username}&password=${password}`
                    )
                    .then((response) => {
                        let data = response.data;
                        if (!data.status) {
                            redirect();
                        } else console.log("Jooooooo");
                    }, (error) => {
                        setTimeout(()=>setCheckServer(prev => !prev), 2000)
                    });
            }
        }
    }, [checkServer]);

    function redirect() {
        window.location.replace("/NotenFlex_Client/login");
    }

    function loadLocalStorage() {
        if (
            localStorage.getItem("username") !== "undefined" &&
            localStorage.getItem("password") !== "undefined"
        ) {
            return true;
        }
        return false;
    }

    return (
        <Router>
            <div className="app">
                <Sidebar url={url} setUrl={setUrl} user={user} />

                <Switch>
                    <Route path="/" exact>
                        <Home setUrl={setUrl} />
                    </Route>
                    <Route path="/NotenFlex_Client/upload" exact>
                        <Upload setUrl={setUrl} />
                    </Route>
                    <Route
                        path="/NotenFlex_Client/profile/:id"
                        exact
                        render={(props) => (
                            <Profile setUrl={setUrl} {...props} />
                        )}
                    />
                    <Route path="/NotenFlex_Client/login" exact>
                        <Login setUser={setUser} />
                    </Route>
                    <Route path="/NotenFlex_Client/register" exact>
                        <Register setUser={setUser} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
