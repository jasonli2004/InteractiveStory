import React from "react";
import "./BackgroundVideo.css";

const BackgroundVideo = () => (
  <div className="background-video-container">
    <iframe
      className="background-video"
      src="https://www.youtube.com/embed/6bPN0JyGfA4?autoplay=1&mute=1&loop=1&playlist=6bPN0JyGfA4&modestbranding=1&controls=0&start=60"
      title="Background Video"
      frameBorder="0"
      allow="autoplay; fullscreen"
      allowFullScreen
    ></iframe>
  </div>
);

export default BackgroundVideo;
