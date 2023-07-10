import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";

const Image = (props) => {
  const [isCommentSending, setIsCommentSending] = useState(false);
  const [images, setImages] = useState([]);
  const maxImagesUpload = 4; // 画像を最大4枚まで選択・アップロード
  const [commentText, setCommentText] = useState('');
  const inputId = Math.random().toString(32).substring(2);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsCommentSending(true);

    const target = e.target;

    const data = new FormData();
    images.map((image) => {
      data.append("images[]", image);
    });
    data.append("comment", target.comment?.value || "");
    const postedComment = await axios.post(
      '/api/v1/comments',
      data
    );

    setIsCommentSending(false);
  };

  const handleOnAddImage = (e) => {
    if (!e.target.files) return;
    setImages([...images, ...e.target.files]);
  };

  const handleOnRemoveImage = (index) => {
    // 選択した画像は削除可能
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <form action="" onSubmit={(e) => handleOnSubmit(e)}>
      <TextField
        name="comment"
        value={commentText}
        multiline
        minRows={1}
        maxRows={20}
        placeholder="コメントを書く"
        fullWidth
        variant="standard"
        disabled={isCommentSending}
        onChange={(e) => setCommentText(e.target.value)}
      />
      {/* 1つのボタンで画像を選択する */}
      <label htmlFor={inputId}>
        <Button
          variant="contained"
          disabled={images.length >= maxImagesUpload}
          component="span"
        >
          画像追加
        </Button>
        <input
          id={inputId}
          type="file"
          multiple
          accept="image/*,.png,.jpg,.jpeg,.gif"
          onChange={(e) =>
            handleOnAddImage(e)
          }
          style={{ display: "none" }}
        />
      </label>
      {/* 画像を選択したら選択中のすべての画像のプレビューを表示 */}
      {images.map((image, i) => (
        <div
          key={i}
          style={{
            position: "relative",
            width: "40%",
          }}
        >
          <IconButton
            aria-label="delete image"
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              color: "#aaa",
            }}
            onClick={() => handleOnRemoveImage(i)}
          >
            <CancelIcon />
          </IconButton>
          <img
            src={URL.createObjectURL(image)}
            style={{
              width: "100%"
            }}
          />
        </div>
      ))}
      <br />
      <br />
      {isCommentSending ? (
        <CircularProgress />
      ) : (
        <Button
          variant="contained"
          type="submit"
          disableElevation
          disabled={!commentText}
        >
          投稿
        </Button>
      )}
    </form>
  );
};

export default Image;
