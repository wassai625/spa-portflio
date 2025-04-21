import React, { createContext, useState, useEffect } from "react";
import { withCookies } from "react-cookie";
import axios from "axios";

export const ApiPostContext = createContext();

const ApiPostContextProvider = (props) => {
    const token = props.cookies.get("current-token");
    const [post, setPost] = useState([]);
    const [posts, setPosts] = useState([]);
    const [editedPost, setEditedPost] = useState([]);

    useEffect(() => {
        const getMyPost = async () => {
            try {
                const res = await axios.get("http://52.194.180.73:8000/api/post/post", {
                    headers: {
                        Authorization: `Token ${token}`,    
                    },
                });
                setPost(res.data);
            } catch {
                console.log("error");
            }
        };
        getMyPost();
    },[token, post.id])


    return (
        <ApiPostContextProvider
            value = {{
                post,setPost,
                posts,setPosts,
                editedPost,setEditedPost
            }}
        >
            {props.children}
        </ApiPostContextProvider>
    );
};

export default withCookies(ApiPostContextProvider);


