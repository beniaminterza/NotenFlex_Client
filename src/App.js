import React, { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./Style/basic.css";
import "./Style/home.css";
import Home from "./Components/Main/Home";
import Upload from "./Components/Upload/Upload";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
    const [url, setUrl] = useState(window.location.pathname);

    return (
        <Router>
            <div className="app">
                <Sidebar url={url} setUrl={setUrl} />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/upload" exact>
                        <Upload />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
