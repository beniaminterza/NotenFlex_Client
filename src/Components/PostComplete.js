import React from "react";
import Post from "../Components/Post";
import UserLogo from "../Components/UserLogo";

export default function PostComplete({
    user,
    fach,
    note,
    beschreibung,
    datum,
    likes,
    liked,
    color,
}) {
    return (
        <div className="postComplete">
            <Post
                fach={fach}
                note={note}
                beschreibung={beschreibung}
                datum={datum}
                color={color}
            />
            <div className="postInformations">
                <div className="user" >
                    <UserLogo name={Array.from(user)[5].toUpperCase()} />
                    <p>{user}</p>
                </div>
                <div
                    className="like"
                    style={liked ? { color: "#FF6D6D" } : { color: "#9BA6C4" }}
                >
                    <div className="icon">
                        <i className="fas fa-heart"></i>
                    </div>
                    <p
                        style={
                            liked ? { color: "#FF6D6D" } : { color: "#9BA6C4" }
                        }
                    >
                        {likes} Likes
                    </p>
                </div>
            </div>
        </div>
    );
}
