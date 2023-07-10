import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import axios from "axios";


function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = async (e) => { 
      e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/post/post/",{
        text: tweetMessage, 
        title: 'test'
      });
      // setTweetMessage(res.data);
      // setTweetImage(res.data);
    } catch {
      console.log("error");
    }
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox--input">
          <Avatar />
          <input
            value={tweetMessage}
            placeholder="いまどうしてる？"
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
          ></input>
        </div>
        <input
          value={tweetImage}
          className="tweetBox--imageInput"
          placeholder="画像のURLを入力してください"
          type="text"
          onChange={(e) => setTweetImage(e.target.value)}
        ></input>

        <Button
          className="tweetBox--tweetButton"
          type="submit"
          onClick={sendTweet}
        >
          投稿する
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;