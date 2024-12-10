import React, { useRef, useEffect } from "react";

const BackgroundAudio = ({ playSignal }) => {
  const backgroundAudioRef = useRef(null); // Reference for background audio

  useEffect(() => {
    if (playSignal && backgroundAudioRef.current) {
      backgroundAudioRef.current.play().catch((error) => {
        console.error("Error playing background audio:", error);
      });
    }
  }, [playSignal]); // Trigger when playSignal changes

  return (
    <audio ref={backgroundAudioRef} src="/assets/audio/music.mp3" loop></audio>
  );
};

export default BackgroundAudio;
