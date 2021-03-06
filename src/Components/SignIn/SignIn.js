import React, { useState } from "react";
import "../../Style/login.css";
import InputC from "../InputC";
import Button from "../../Button";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

export default function SignIn({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [redi, setRedi] = useState(false);

    function checkInput() {
        if (username === "" && password === "")
            setError("Enter a username + password");
        else if (username === "") setError("Enter a username");
        else if (password === "") setError("Enter a password");
        else {
            setError("");
            axios
                .get(
                    `http://localhost:9998/NFlex/checkLogin?user=${username}&password=${password}`
                )
                .then((response) => {
                    let data = response.data;
                    if (data.status) {
                        setUser(username);
                        localStorage.setItem("username", username);
                        localStorage.setItem("password", password);
                        setRedi(true);
                    } else setError("Username or Password is incorrect");
                });
        }
    }

    return (
        <div className="log">
            {redi ? (
                <Redirect to="/" />
            ) : (
                <div className="fullLogin">
                    <div className="login">
                        <h1>Login</h1>
                        <div className="linie"></div>
                        <div className="input">
                            <p>Username</p>
                            <InputC
                                type="text"
                                name=""
                                placeholder="Username"
                                value={username}
                                setValue={setUsername}
                            />
                        </div>
                        <div className="input">
                            <p>Password</p>
                            <InputC
                                type="password"
                                name=""
                                placeholder="Password"
                                value={password}
                                setValue={setPassword}
                            />
                        </div>

                        <div className="input button">
                            <div onClick={checkInput}>
                                <button>Login</button>
                            </div>
                            <p style={{ color: "#FF6D6D" }} className="error">
                                {error}
                            </p>
                        </div>

                        <div className="input button grey">
                            <p style={{ color: "#9ba6c4" }}>New NFlex user?</p>
                            <Link to={"/register/"}>
                                <Button name="Register" />
                            </Link>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
}
