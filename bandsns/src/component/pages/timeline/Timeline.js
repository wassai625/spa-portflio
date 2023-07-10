import React, { useState, useEffect } from "react";
import Post from "./Post";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import axios from "axios";

function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getMyPost = async () => {
      try {
          const res = await axios.get("http://localhost:8000/api/post/post/", {
              // headers: {
                  // Authorization: `Token ${to ken}`,   
              // },
          });
          setPosts(res.data);
      } catch {
          console.log("error");
      }
  };
  getMyPost();
},[])



  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline--header">
        <h2>ホーム</h2>
      </div>
      {/* TweetBox */}
      <TweetBox />

      {/* Post */}

        {posts.map((post) => (

                    <Post
                    key={post.id}
                    title={post.title}
                    writer={post.writer}
                    username={post.user}
                    text={post.text}
                    images={post.images}
                  />
        ))}
    </div>
  );
}

export default Timeline;