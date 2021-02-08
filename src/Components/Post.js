import React from "react";

export default function Post({ fach, note, beschreibung, datum, color }) {
    const colors = new Map();

    colors.set("blue", "#B2EDFF");
    colors.set("green", "#D6FFB2");
    colors.set("yellow", "#FFFAB2");
    colors.set("orange", "#FFBDB2");
    colors.set("pink", "#FFB2DE");
    colors.set("violet", "#B2B7FF");

    colors.set("blueLight", "#e6f9ff");
    colors.set("greenLight", "#f1ffe6");
    colors.set("yellowLight", "#fffde3");
    colors.set("orangeLight", "#ffe9e6");
    colors.set("pinkLight", "#ffe3f3");
    colors.set("violetLight", "#e8eaff");

    return (
        <div className="post">
            <div
                className="mark"
                style={{ backgroundColor: colors.get(color) }}
            >
                <h1
                    style={
                        note.length < 2
                            ? { fontSize: "6rem" }
                            : note.length < 3
                            ? { fontSize: "5rem" }
                            : note.length < 4
                            ? { fontSize: "4rem" }
                            : {
                                  fontSize: "4rem",
                              }
                    }
                >
                    {note}
                </h1>
            </div>
            <div
                className="informations"
                style={{ backgroundColor: colors.get(color + "Light") }}
            >
                <h3>{fach}</h3>
                <h4>{beschreibung}</h4>
                <p className="date">{datum}</p>
            </div>
        </div>
    );
}
