import React, { useRef, useState } from "react";
import "./videocard.css";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";

function VideosCard({url, channel, avatarSrc, song, likes, shares}) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      // Stop
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className="videoCard">
      <VideoHeader/>
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard_player"
        src={url}
        alt="IG Reel Video"
        loop
      />
      <VideoFooter
      channel={channel}
      avatarSrc={avatarSrc} 
      song={song}
      likes={likes}
      shares={shares}  
      />
    </div>
  );
}

export default VideosCard;
