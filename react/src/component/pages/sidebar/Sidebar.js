import React from "react";

import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from '@mui/icons-material/Search';
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
// import { Button } from "@mui/material";
// import SettingsIcon from '@mui/icons-material/Settings';

import "./Sidebar.css";
import { Link, } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* ツイッターアイコン */}
      <FaceRetouchingNaturalIcon className="sidebar--twitterIcon" />

      {/* SidebarOption */}
      <Link to="/main">
        <SidebarOption text="マイページ" Icon={HomeIcon} />
      </Link>

      {/* <Link to="/Search">
        <SidebarOption text="ライブを検索" Icon={SearchIcon} />
      </Link> */}

      {/* <SidebarOption text="通知" Icon={NotificationsNoneIcon} /> */}
      {/* <SidebarOption text="メッセージ" Icon={MailOutlineIcon} /> */}
      {/* <SidebarOption text="ブックマーク" Icon={BookmarkBorderIcon} />
      <SidebarOption text="リスト" Icon={ListAltIcon} /> */}

      <Link to="/Search">
        <SidebarOption text="検索" Icon={SearchIcon} />
      </Link>
      
      
      <SidebarOption text="プロフィール" Icon={PermIdentityIcon} />
      
      {/* <SidebarOption text="設定" Icon={SettingsIcon} /> */}

      {/* ツイートボタン
      <Button variant="outlined" className="sidebar--tweet" fullWidth>
        投稿する
      </Button> */}
    </div>
  );
}

export default Sidebar;