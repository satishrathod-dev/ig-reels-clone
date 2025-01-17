import React from "react";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import CameraAltOutlined from "@mui/icons-material/CameraAltOutlined";
import "./VideoHeader.css";

function VideoHeader() {
  return (
    <div className="videoHeader">
      <ArrowDropDown />
      <h3>Reels</h3>
      <CameraAltOutlined />
    </div>
  );
}

export default VideoHeader;
