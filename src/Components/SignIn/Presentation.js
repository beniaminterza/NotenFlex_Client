import React from "react";
import logo from "../../Photos/logo.svg";

export default function Presentation() {
    return (
        <div className="presentation">
            <div className="circle"></div>
            <div className="square"></div>
            <div className="triangle"></div>
            <div className="infos">
                <img src={logo} alt="Logo" />
                <div className="description">
                    <h2>NotenFlex</h2>
                    <div className="linie"></div>
                    <h3>See the Flexes of others</h3>
                    <h3>Flex with your marks</h3>
                    <h3>Like other Flexes</h3>
                </div>
            </div>
        </div>
    );
}
