import React, { useState, useEffect } from "react";
import Post from "../Components/Post";
import UserLogo from "../Components/UserLogo";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PostComplete({
    user,
    fach,
    note,
    beschreibung,
    datum,
    likes,
    liked,
    color,
    myUser,
    postID,
}) {
    const [hasLiked, setHasLiked] = useState(liked);
    const [likeCounter, setLikeCounter] = useState(likes);

    function like() {
        axios
            .get(
                `http://localhost:9998/NFlex/likePost?user=${user}&postID=${postID}&myUser=${myUser}`
            )
            .then((response) => {
                console.log(response.data);
                if (response.data.status) {
                    if (hasLiked) setLikeCounter(likeCounter - 1);
                    else setLikeCounter(likeCounter + 1);
                    setHasLiked(!hasLiked);
                    console.log(myUser + " liked " + postID + " from " + user);
                }
            });
    }

    useEffect(() => {
        console.log("user: " + myUser);
    }, [myUser]);

    return (
        <div className="postComplete" onDoubleClick={like}>
            <Post
                fach={fach}
                note={note}
                beschreibung={beschreibung}
                datum={datum}
                color={color}
            />
            <div className="postInformations">
                <Link to={`/profile/${user}`} className="user">
                    <UserLogo name={Array.from(user)[5].toUpperCase()} />
                    <p>{user}</p>
                </Link>
                <div
                    className="like"
                    style={
                        hasLiked ? { color: "#FF6D6D" } : { color: "#9BA6C4" }
                    }
                >
                    <div className="icon">
                        <i className="fas fa-heart"></i>
                    </div>
                    <p
                        style={
                            hasLiked
                                ? { color: "#FF6D6D" }
                                : { color: "#9BA6C4" }
                        }
                    >
                        {likeCounter} Likes
                    </p>
                </div>
            </div>
        </div>
    );
}
