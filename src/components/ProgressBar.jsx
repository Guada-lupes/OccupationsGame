import React, { useEffect, useRef, useState } from "react";
import { usePlayer } from "../context/PlayerContext";
import styles from "../styles/header.module.css";

const ProgressBar = () => {
  const state = usePlayer();
  const [progress, setProgress] = useState(0);
  const prevChallengeCount = useRef(0);

  function incrementBar() {
    const currentCount = state.state.doneChallenge.length;
    
    if (currentCount > prevChallengeCount.current) {
      if (state.state.doneChallenge.length === 13) {
        setProgress(100);
        return;
      } else{
        setProgress((prev) => Number(prev + 7));
      }
      prevChallengeCount.current = currentCount;
    }
  }

  useEffect(() => {
    incrementBar();
  }, [state.state.doneChallenge]);

  return (
    <div className={styles.progress_bar}>
      <div
        className={styles.progress_fill}
        style={{ width: progress < 0 ? "0" : `${progress}%` }}
      >
      </div>
    </div>
  );
};

export default ProgressBar;
