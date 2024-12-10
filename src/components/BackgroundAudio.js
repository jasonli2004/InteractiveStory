import React, { useRef, useEffect } from "react";

const BackgroundAudio = () => {
  const backgroundAudioRef = useRef(null); // Reference for background audio

  useEffect(() => {
    if (backgroundAudioRef.current) {
      backgroundAudioRef.current.volume = 0.7; // Set the volume to 90% (0.9)
    }
  }, []); // Run this effect once on mount

  return (
    <audio
      ref={backgroundAudioRef}
      src="/assets/audio/music.mp3"
      loop
      autoPlay
    ></audio>
  );
};

export default BackgroundAudio;
