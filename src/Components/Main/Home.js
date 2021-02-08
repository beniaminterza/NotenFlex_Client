import React from "react";
import PostComplete from "../PostComplete";

export default function Home() {
    return (
        <div className="home main">
            <div className="content">
                <div className="head">
                    <h2>Feed</h2>
                    <div className="filter">
                        <p>All</p>
                        <p>Popular</p>
                        <p className="selected">Newest</p>
                    </div>
                </div>
                <div className="posts">
                    <PostComplete
                        user="stterben"
                        note="9"
                        beschreibung="Datenbanken Modellierung"
                        fach="Informatik"
                        datum="01.10.2020"
                        liked={true}
                        likes="12"
                        color="orange"
                    />
                    <PostComplete
                        user="stterben"
                        note="9/10"
                        beschreibung="Datenbanken Modellierung"
                        fach="Informatik"
                        datum="01.10.2020"
                        liked={false}
                        likes="12"
                        color="green"
                    />
                    <PostComplete
                        user="stterben"
                        note="6+"
                        beschreibung="Erzähltextanalyse"
                        fach="Deutsch"
                        datum="01.10.2020"
                        liked={false}
                        likes="12"
                        color="yellow"
                    />
                    <PostComplete
                        user="stterben"
                        note="6+"
                        beschreibung="Erzähltextanalyse"
                        fach="Deutsch"
                        datum="01.10.2020"
                        liked={false}
                        likes="12"
                        color="violet"
                    />
                </div>
            </div>
        </div>
    );
}
