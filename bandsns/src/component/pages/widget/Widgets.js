import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets--input">
        <SearchRoundedIcon className="widgets--searchIcon" />
        <input placeholder="キーワード検索" type="text" />
      </div>

      <div className="widgets--widgetContainer">
        <h2>いまどうしてる？</h2>

        {/* ライブラリを追加・追記 */}
        <TwitterTweetEmbed tweetId={"1529014124889645056"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="harapeko_wassai"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com/harapeko_wassai"}
          options={{ text: "#ポートフォリオ作成中", via: "harapeko_wassai" }}
        />
      </div>
    </div>
  );
}

export default Widgets;