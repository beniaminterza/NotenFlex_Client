import React, { useState, useEffect } from "react";
import UserLogo from "../UserLogo";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ProfileDescribtion({
    user,
    likes,
    posts,
    avgMark,
    setSearch,
    link,
    setUser,
    follow,
    main,
}) {
    const [isFollowing, setIsFollowing] = useState(follow);
    const [followClass, setFollowClass] = useState("");

    useEffect(() => {
        if (main !== undefined) {
            axios
                .get(
                    `http://localhost:9998/NFlex/getUserInfo?user=${user}&myUser=${localStorage.getItem(
                        "username"
                    )}`
                )
                .then((response) => {
                    setIsFollowing(response.data.isFollowing);
                });
        }
    }, [likes]);

    useEffect(() => {
        if (isFollowing) setFollowClass("unfollow");
        else setFollowClass("");
    }, [isFollowing]);

    function click() {
        setSearch("");
        setUser(user);
    }
    function clickFollow() {
        axios
            .post(
                `http://localhost:9998/NFlex/followUser?followUser=${user}&myUser=${localStorage.getItem(
                    "username"
                )}`
            )
            .then((response) => {
                console.log("follow ausgeführt");
                setIsFollowing(!isFollowing);
            });
    }

    return (
        <div className="profile">
            {link === undefined ? (
                <UserLogo name={Array.from(user)[5].toUpperCase()} />
            ) : (
                <Link
                    to={link}
                    onClick={click}
                    style={{ textDecoration: "none" }}
                >
                    <UserLogo name={Array.from(user)[5].toUpperCase()} />
                </Link>
            )}

            <div className="informations">
                {link === undefined ? (
                    <div className="title">
                        <h2>{user}</h2>
                        {localStorage.getItem("username") !== user ? (
                            <button
                                onClick={clickFollow}
                                className={followClass}
                            >
                                {followClass === "unfollow"
                                    ? "Unfollow"
                                    : "Follow"}
                            </button>
                        ) : null}
                    </div>
                ) : (
                    <div className="title">
                        <Link
                            to={link}
                            onClick={click}
                            style={{ textDecoration: "none" }}
                        >
                            <h2>{user}</h2>
                        </Link>
                        {localStorage.getItem("username") !== user ? (
                            <button
                                onClick={clickFollow}
                                className={followClass}
                            >
                                {followClass === "unfollow"
                                    ? "Unfollow"
                                    : "Follow"}
                            </button>
                        ) : null}
                    </div>
                )}

                {link === undefined ? (
                    <div className="data">
                        <div className="dataElement">
                            <h4>{likes}</h4>
                            <p>Likes</p>
                        </div>
                        <div className="dataElement">
                            <h4>{posts}</h4>
                            <p>Posts</p>
                        </div>
                        <div className="dataElement">
                            <h4>{avgMark}</h4>
                            <p>Average Mark</p>
                        </div>
                    </div>
                ) : (
                    <Link
                        to={link}
                        onClick={click}
                        style={{ textDecoration: "none" }}
                    >
                        <div className="data">
                            <div className="dataElement">
                                <h4>{likes}</h4>
                                <p>Likes</p>
                            </div>
                            <div className="dataElement">
                                <h4>{posts}</h4>
                                <p>Posts</p>
                            </div>
                            <div className="dataElement">
                                <h4>{avgMark}</h4>
                                <p>Average Mark</p>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
}
