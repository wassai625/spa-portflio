import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import Search from "./component/pages/sidebar/sidebarDetail/search/Search";
import Login from "./component/Login";
import Image from "./component/pages/Image"
import Post from "./component/pages/timeline/Post";
import Home from "./component/home/Home";
import Profile from "./component/profile/Profile";



const routing = (
  <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/main" element={<App/>} />
          <Route exact path="/profile" element={<Profile/>} />
          <Route exact path="/search" element={<Search/>} />
          <Route exact path="/image" element={<Image/>} />
          <Route exact path="/post" element={<Post/>} />
        </Routes>
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>
);

createRoot(document.getElementById("root")).render(routing);