import React, { useState, useEffect } from "react";
import InputC from "../InputC";
import "../../Style/upload.css";
import ColorSelect from ".//ColorSelect";
import Post from "../Post";
import axios from "axios";

export default function Upload({ setUrl }) {
    const [color, setColor] = useState("green");
    const [fach, setFach] = useState("Informatik");
    const [beschreibung, setBeschreibung] = useState("Describe the exam");
    const [date] = useState(new Date());
    const [datum, setDatum] = useState(
        new Date(date.getTime() + new Date().getTimezoneOffset() * -60 * 1000)
            .toISOString()
            .slice(0, 19)
    );
    const [note, setNote] = useState("9");

    useEffect(() => {
        setUrl("/upload");
    }, []);

    function publish() {
        let axiosConfig = {
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
            },
        };
        let data = {
            user: localStorage.getItem("username"),
            fach: fach,
            beschreibung: beschreibung,
            note: note,
            color: color,
            date: datum,
        };
        console.log(data);
        axios
            .post("http://localhost:9998/NFlex/addPost", data, axiosConfig)
            .then((response) => {
                window.location.replace("/");
            });
    }

    return (
        <div className="main">
            <div className="content">
                <div className="head">
                    <h2>Upload</h2>
                </div>
                <div className="create">
                    <div className="section">
                        <div>
                            <p>Mark</p>
                            <InputC
                                type={"text"}
                                placeholder={"f.ex. 9"}
                                width="50px"
                                name="middle"
                                value={note}
                                setValue={setNote}
                            />
                        </div>
                        <div>
                            <p>Subject</p>
                            <InputC
                                type={"text"}
                                placeholder={"f.ex Informatik"}
                                width="250px"
                                name=""
                                value={fach}
                                setValue={setFach}
                            />
                        </div>
                        <div>
                            <p>Date</p>
                            <InputC
                                type={"datetime-local"}
                                placeholder={"Informatik"}
                                width="250px"
                                name=""
                                value={datum}
                                setValue={setDatum}
                            />
                        </div>
                    </div>
                    <div className="section">
                        <div className="divS2">
                            <p>Description</p>
                            <textarea
                                className="description"
                                name="Text1"
                                cols="40"
                                rows="5"
                                value={beschreibung}
                                onChange={(e) =>
                                    setBeschreibung(e.target.value)
                                }
                            ></textarea>
                        </div>
                        <div className="divS2">
                            <p>Color</p>
                            <div className="colors">
                                <ColorSelect
                                    colorValue="#B2EDFF"
                                    name="blue"
                                    color={color}
                                    setColor={setColor}
                                />
                                <ColorSelect
                                    colorValue="#D6FFB2"
                                    name="green"
                                    color={color}
                                    setColor={setColor}
                                />
                                <ColorSelect
                                    colorValue="#FFFAB2"
                                    name="yellow"
                                    color={color}
                                    setColor={setColor}
                                />
                                <ColorSelect
                                    colorValue="#FFBDB2"
                                    name="orange"
                                    color={color}
                                    setColor={setColor}
                                />
                                <ColorSelect
                                    colorValue="#FFB2DE"
                                    name="pink"
                                    color={color}
                                    setColor={setColor}
                                />
                                <ColorSelect
                                    colorValue="#B2B7FF"
                                    name="violet"
                                    color={color}
                                    setColor={setColor}
                                />
                            </div>
                            <button onClick={publish}>Publish</button>
                        </div>
                    </div>
                </div>
                <div className="preview">
                    <h3 id="title">Preview</h3>
                    <Post
                        note={note}
                        fach={fach}
                        beschreibung={beschreibung}
                        datum={datum.replace("T", " ")}
                        color={color}
                    />
                </div>
            </div>
        </div>
    );
}
