import React, { createContext, useState, useEffect } from "react";
import { withCookies } from "react-cookie";
import axios from "axios";

export const ApiPostImagesContext = createContext();

const ApiPostImagesContextProvider = (props) => {
    const token = props.cookies.get("current-token");
    const [image, setImage] = useState([]);
    const [images, setImages] = useState([]);
    const [editedImage, setEditedImage] = useState([]);

    useEffect(() => {
        const getMyImage = async () => {
            try {
                const res = await axios.get("http://52.194.180.73:8000/api/post/image/image", {
                    headers: {
                        Authorization: `Token ${token}`,    
                    },
                });
                setImage(res.data);
            } catch {
                console.log("error");
            }
        };
        getMyImage();
    },[token, image.id])


    return (
        <ApiPostImagesContextProvider
            value = {{
                image,setImage,
                images,setImages,
                editedImage,setEditedImage
            }}
        >
            {props.children}
        </ApiPostImagesContextProvider>
    );
};

export default withCookies(ApiPostImagesContextProvider);

