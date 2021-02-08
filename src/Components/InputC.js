import React from "react";

export default function InputC({
    type,
    placeholder,
    width,
    name,
    value,
    setValue,
}) {
    function changeValue(e) {
        setValue(e.target.value)
    }

    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                style={{ width: width }}
                className={name}
                onChange={changeValue}
                value= {value}
            />
        </div>
    );
}
