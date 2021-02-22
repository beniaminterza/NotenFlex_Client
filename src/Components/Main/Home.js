import React, { useState, useEffect } from "react";
import PostComplete from "../PostComplete";
import axios from "axios";

export default function Home({ setUrl }) {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState("Newest");
    const [request, setRequest] = useState(
        "http://localhost:9998/NFlex/getFollowingPosts"
    );
    const [refresh, setRefresh] = useState(false)

    function changeFilter(e) {
        setFilter(e.target.innerHTML);
    }

    useEffect(() => {
        setUrl("/");
    }, []);

    useEffect(() => {
        console.log(filter);
        if (filter === "Popular")
            setRequest("http://localhost:9998/NFlex/getPopularPosts");
        else if (filter === "Best")
            setRequest("http://localhost:9998/NFlex/getBestPosts");
        else if (filter === "Newest")
            setRequest("http://localhost:9998/NFlex/getNewestPosts");
        else if (filter === "Following")
            setRequest("http://localhost:9998/NFlex/getFollowingPosts");
    }, [filter]);

    useEffect(() => {
        console.log("refresh")
        axios
            .get(`${request}?user=${localStorage.getItem("username")}`)
            .then((response) => {
                setPosts([]);
                setPosts(
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
                            key={element.postID}
                            postID={element.postID}
                            myUser={localStorage.getItem("username")}
                        />
                    ))
                );
            });
        setTimeout(()=> setRefresh(prev => !prev),2000)
    }, [request, refresh]);

    return (
        <div className="home main">
            
            <div className="content">
                <div className="head">
                    <h2>Feed</h2>
                    <div className="filter">
                        <p
                            className={filter === "Best" ? "selected" : ""}
                            onClick={changeFilter}
                        >
                            Best
                        </p>
                        <p
                            className={filter === "Popular" ? "selected" : ""}
                            onClick={changeFilter}
                        >
                            Popular
                        </p>
                        <p
                            className={filter === "Following" ? "selected" : ""}
                            onClick={changeFilter}
                        >
                            Following
                        </p>
                        <p
                            className={filter === "Newest" ? "selected" : ""}
                            onClick={changeFilter}
                        >
                            Newest
                        </p>
                    </div>
                </div>
                <div className="posts">{posts}</div>
            </div>
        </div>
    );
}
