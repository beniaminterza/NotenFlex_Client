import React, { useState, useEffect } from "react";
import "../../Style/profile.css";
import PostComplete from "../PostComplete";
import InputC from "../InputC";
import ProfileDescribtion from "./ProfileDescribtion";
import axios from "axios";

export default function Profile({ match, setUrl }) {
    const [user, setUser] = useState(match.params.id);
    const [likes, setLikes] = useState();
    const [posts, setPosts] = useState();
    const [avgMark, setavgMark] = useState();
    const [search, setSearch] = useState("");
    const [profiles, setProfiles] = useState([]);
    const [realPosts, setRealPosts] = useState([]);
    const [isFollowing, setIsFollowing] = useState(false);

    useEffect(() => {
        setUrl("/profile");
    }, []);

    // usage

    useEffect(() => {
        axios
            .get(
                `http://localhost:9998/NFlex/getUserInfo?user=${user}&myUser=${localStorage.getItem(
                    "username"
                )}`
            )
            .then((response) => {
                let data = response.data;
                setLikes(data.likes);
                setPosts(data.posts);
                setavgMark(data.averageMark);
            });

        axios
            .get(
                `http://localhost:9998/NFlex/getAllUserPosts?user=${user}&myUser=${localStorage.getItem(
                    "username"
                )}`
            )
            .then((response) => {
                setRealPosts(
                    response.data.map((element) => (
                        <PostComplete
                            user={element.username}
                            note={element.note.toString()}
                            beschreibung={element.beschreibung}
                            fach={element.fach}
                            datum={element.date}
                            liked={element.liked}
                            likes={element.likeCounter}
                            color={element.color}
                            follow={element.isFollowing}
                            key={element.postID}
                            postID={element.postID}
                            myUser={localStorage.getItem("username")}
                        />
                    ))
                );
            });
    }, [user]);

    useEffect(() => {
        if (search.length !== 0)
            axios
                .get(
                    `http://localhost:9998/NFlex/searchUser?search=${search}&myUser=${localStorage.getItem(
                        "username"
                    )}`
                )
                .then((response) => {
                    console.log(response.data);
                    setProfiles(
                        response.data.map((element) => (
                            <ProfileDescribtion
                                user={element.user}
                                likes={element.likes}
                                posts={element.posts}
                                avgMark={element.averageMark}
                                setSearch={setSearch}
                                link={`/profile/${element.user}`}
                                key={Math.random() * 10000}
                                setUser={setUser}
                                follow={element.isFollowing}
                            />
                        ))
                    );
                });
    }, [search]);

    return (
        <div className="main profile">
            <div className="content">
                <div className="head">
                    <h2>Profile</h2>
                    <InputC
                        type="text"
                        width="150px"
                        value={search}
                        setValue={setSearch}
                        placeholder="Search"
                    />
                </div>
                {search.length === 0 ? (
                    <div className="mainInfos">
                        <ProfileDescribtion
                            user={user}
                            likes={likes}
                            posts={posts}
                            avgMark={avgMark}
                            follow={isFollowing}
                            main={true}
                        />
                        {realPosts}
                    </div>
                ) : (
                    <div className="search">
                        <h3>Search Profiles: {search}</h3>
                        {profiles}
                    </div>
                )}
            </div>
        </div>
    );
}
