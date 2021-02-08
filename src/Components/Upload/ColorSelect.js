import React from "react";

export default function ColorSelect({ name, colorValue, color, setColor }) {
    function changeColor() {
        console.log(name);
        setColor(name);
    }

    return (
        <div
            className={color === name ? "color selected" : "color"}
            style={{ backgroundColor: colorValue }}
            onClick={changeColor}
        ></div>
    );
}
