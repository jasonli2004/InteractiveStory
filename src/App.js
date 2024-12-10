import React, { useState, useRef, useEffect } from "react";
import RotatingBackground from "./components/RotatingBackground";
import BackgroundVideo from "./components/BackgroundVideo";
import BackgroundAudio from "./components/BackgroundAudio";
import "./App.css";
import ButtonsContainer from "./components/ButtonContainer";
import RestartButton from "./components/RestartButton";
import Ladder from "./components/Ladder";
import LadderBase from "./components/LadderBase";
import StartButton from "./components/StartButton";

export default function App() {
  const [buttonState, setButtonState] = useState(true);
  const [restartButton, setRestartButton] = useState(false);

  const [audioSrc, setAudioSrc] = useState("/assets/audio/p0.mp3");
  const [currentStage, setCurrentStage] = useState(0);
  const audioRef = useRef(null); // Reference to the audio element
  const [moveUpSignal, setMoveUpSignal] = useState(0); // Signal to move the person up
  const [fallSignal, setFallSignal] = useState(0); // Signal to make the person fall
  const [showLogo, setShowLogo] = useState(false); // Signal to make the person fall
  const [start, setStart] = useState(true);
  const [playSignal, setPlaySignal] = useState(0);

  const logic = [
    {
      id: "welcome0",
      left: 1,
      right: 2,
    },
    {
      id: "sunny1",
      left: 3,
      right: 4,
    },
    {
      id: "cloudy2",
      left: 3,
      right: 4,
    },
    {
      id: "toycar3",
      left: 5,
      right: 6,
    },
    {
      id: "bubblegun4",
      left: 5,
      right: 6,
    },
    {
      id: "dropout5",
      left: 7,
      right: 8,
    },
    {
      id: "highschool6",
      left: 9,
      right: 10,
    },

    {
      id: "findsavior7",
      left: 12,
      right: 11,
    },
    {
      id: "notfind8",
      left: 13,
      right: 11,
    },

    {
      id: "CS9",
      left: 12,
      right: 11,
    },
    {
      id: "Bio10",
      left: 14,
      right: 15,
    },

    {
      id: "notinvest/marry11",
      left: 17,
      right: 18,
    },
    {
      id: "invest12",
      left: 16,
      right: 16,
    },

    {
      id: "notmarry13",
      left: 19,
      right: 22,
    },
    {
      id: "breakthru14",
      left: 20,
      right: 21,
    },

    {
      id: "stable15",
      left: 16,
      right: 16,
    },

    {
      id: "workhard16",
      left: 19,
      right: 21,
    },
  ];

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Audio play failed:", error);
      });
    }
  };

  const handleAudioEnd = () => {
    if (currentStage <= 16) {
      setButtonState(true);
    } else {
      setFallSignal((prev) => prev + 1);
      setButtonState(false);
      setRestartButton(true);
      setTimeout(() => {
        setShowLogo(true);
      }, 3000);
    }
  };

  const handleButtonClick = (nextStage) => {
    if (audioRef.current) {
      audioRef.current.pause(); // Pause the current audio
      audioRef.current.currentTime = 0; // Reset the current audio to the start
    }

    setMoveUpSignal((prev) => prev + 1); // Increment the signal to trigger movement

    setButtonState(true);
    setRestartButton(false); // Hide buttons while audio is playing
    setCurrentStage(nextStage); // Update the current stage
    const newAudioSrc = `/assets/audio/p${nextStage}.mp3`; // Generate new audio source
    setAudioSrc(newAudioSrc); // Update the audio source

    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.load(); // Reload the audio element with the new source
        playAudio(); // Play the updated audio
      }
    }, 0); // Ensure the state update propagates before playback
  };

  return (
    <div className="App">
      {!showLogo && (
        <Ladder moveUpSignal={moveUpSignal} fallSignal={fallSignal} />
      )}
      <BackgroundAudio playSignal={playSignal} />
      <BackgroundVideo />
      <RotatingBackground />
      {buttonState && !start && (
        <ButtonsContainer
          onLeftClick={() => {
            handleButtonClick(logic[currentStage].left); // Navigate to the left stage
            console.log("Left button clicked");
          }}
          onRightClick={() => {
            handleButtonClick(logic[currentStage].right); // Navigate to the right stage
            console.log("Right button clicked");
          }}
        />
      )}

      {restartButton && (
        <RestartButton
          onLeftClick={() => {
            window.location.reload(); // Navigate to the left stage
          }}
          onRightClick={() => {
            window.location.reload(); // Navigate to the right stage
          }}
        />
      )}

      {start && (
        <StartButton
          onLeftClick={() => {
            setCurrentStage(0);
            setStart(false);
            setPlaySignal((prev) => prev + 1);
            playAudio(0);
          }}
          onRightClick={() => {
            setCurrentStage(0);
            setStart(false);
            setPlaySignal((prev) => prev + 1);
            playAudio(0);
          }}
        />
      )}
      {showLogo && <LadderBase />}
      <audio
        ref={audioRef}
        src={audioSrc}
        onEnded={handleAudioEnd} // Callback when audio ends
      ></audio>
    </div>
  );
}
