import React, { useState } from "react";
import "../../Style/login.css";
import InputC from "../InputC";
import Button from "../../Button";
import Presentation from "./Presentation";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

export default function Register({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [redi, setRedi] = useState(false);
    const [error, setError] = useState("");

    function checkInput() {
        if (username === "" && password === "")
            setError("Enter a username + password");
        else if (username === "") setError("Enter a username");
        else if (password === "") setError("Enter a password");
        else if (confirmPassword === "") setError("Confirm your password");
        else if (password !== confirmPassword)
            setError("Passwords do not match");
        else {
            setError("");
            let axiosConfig = {
                headers: {
                    "Content-Type": "application/json;charset=UTF-8",
                    "Access-Control-Allow-Origin": "*",
                },
            };
            let data = { user: username, password: password };
            axios
                .post("http://localhost:9998/NFlex/register", data, axiosConfig)
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
                        <h1>Register</h1>
                        <div className="linie"></div>
                        <div className="input">
                            <p>Username</p>
                            <InputC
                                type="text"
                                width="284px"
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
                                width="284px"
                                name=""
                                placeholder="Password"
                                value={password}
                                setValue={setPassword}
                            />
                        </div>
                        <div className="input">
                            <p>Confirm Password</p>
                            <InputC
                                type="password"
                                width="284px"
                                name=""
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                setValue={setConfirmPassword}
                            />
                        </div>

                        <div className="input button">
                            <div onClick={checkInput}>
                                <Button name="Register" />
                            </div>
                            <p style={{ color: "#FF6D6D" }} className="error">
                                {error}
                            </p>
                        </div>

                        <div className="input button grey">
                            <p style={{ color: "#9ba6c4" }}>
                                Already a NFlex user?
                            </p>
                            <Link to="/login/">
                                <Button name="Login" />
                            </Link>
                        </div>
                    </div>
                    <Presentation />
                </div>
            )}
        </div>
    );
}
