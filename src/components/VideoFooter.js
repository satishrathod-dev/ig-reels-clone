// import React from "react";
import { Button, Avatar } from "@mui/material";
import "./VideoFooter.css";
import { MusicNote } from "@mui/icons-material";
import React, { useState, useEffect, useRef } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const CustomTicker = ({ song }) => {
  const [currentText, setCurrentText] = useState(song);
  const tickerRef = useRef();

  useEffect(() => {
    let tickerInterval;
    if (song) {
      tickerInterval = setInterval(() => {
        // Update the ticker text logic
        setCurrentText((prev) => prev.slice(1) + prev[0]);
      }, 200); // Adjust interval as needed
    }
    return () => clearInterval(tickerInterval);
  }, [song]);

  return <h1>{currentText}</h1>;
};

const VideoFooter = ({ channel, song, likes, shares, avatarSrc }) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <Avatar src={avatarSrc} />
        <h3>
          {channel} - <Button>Follow</Button>
        </h3>
      </div>
      <div className="videoFooter_ticker">
        <MusicNote className="videoFooter_icon" />
        <CustomTicker song={song} /> {/* Use CustomTicker */}
      </div>
      <div className="videoFooter_actions">
        <div className="videoFooter_actionsLeft">
          <FavoriteIcon fontSize="large"/>
          <ModeCommentIcon fontSize="large"/>
          <SendIcon fontSize="large"/>
          <MoreHorizIcon fontSize="large"/>
        </div>
        <div className="videoFooter_actionsRight">
          <div className="videoFooter_stat">
            <FavoriteIcon/>
            <p>{likes}</p>
          </div>
          <div className="videoFooter_stat">
            <ModeCommentIcon/>
            <p>{shares}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default VideoFooter;
