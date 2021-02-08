import React, { useState } from "react";
import InputC from "../InputC";
import "../../Style/upload.css";
import ColorSelect from ".//ColorSelect";
import Post from "../Post";

export default function Upload() {
    const [color, setColor] = useState("orange");
    const [fach, setFach] = useState("Informatik");
    const [beschreibung, setBeschreibung] = useState("Describe the exam")
    const [datum, setDatum] = useState(new Date().toJSON().slice(0,10))
    const [note, setNote] = useState("9");


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
                                value = {note}
                                setValue = {setNote}
                            />
                        </div>
                        <div>
                            <p>Subject</p>
                            <InputC
                                type={"text"}
                                placeholder={"f.ex Informatik"}
                                width="300px"
                                name=""
                                value = {fach}
                                setValue = {setFach}
                            />
                        </div>
                        <div>
                            <p>Date</p>
                            <InputC
                                type={"date"}
                                placeholder={"Informatik"}
                                width="150px"
                                name=""
                                value = {datum}
                                setValue = {setDatum}
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
                                value = {beschreibung}
                                onChange={(e)=> setBeschreibung(e.target.value)}
                
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
                            <button>Publish</button>
                        </div>
                    </div>
                </div>
                <div className="preview">
                    <h3 id="title">Preview</h3>
                    <Post note={note} fach={fach} beschreibung={beschreibung} datum={datum} color={color}/>
                </div>
            </div>
        </div>
    );
}
