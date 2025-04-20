
import {
    // ChatBubbleOutline,
    // FavoriteBorder,
    // PublishOutlined,
    // Repeat,
    VerifiedUser,
} from "@mui/icons-material";
import React, { forwardRef } from "react";
import "./Post.css";
  
const Post = forwardRef(
    ({ writer, title, username, text, images, }, ref) => {
      return (
        <div className="post" ref={ref} >
          <div className="post--avatar">
          
          </div>
          <div className="post--body">
            <div className="post--header">
              <div className="post--headerText">
                <h3>
                  {writer}
                  <span className="post--headerSpecial">
                    <VerifiedUser className="post--badge" />@{username}
                  </span>
                </h3>
              </div>
              <div className="post--headerDescription">
              {title}
                <p>{text}</p>
              </div>
            </div>
            <img src={images} />
            {/* <div className="post--footer">
              <ChatBubbleOutline fontSize="small" />
              <Repeat fontSize="small" />
              <FavoriteBorder fontSize="small" />
              <PublishOutlined fontSize="small" />
            </div> */}
          </div>
        </div>
      );
    }
);
  
export default Post;