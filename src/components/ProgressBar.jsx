import React, { useEffect, useRef, useState } from "react";
import { usePlayer } from "../context/PlayerContext";
import styles from "../styles/header.module.css";

const ProgressBar = () => {
  const { state, dispatch } = usePlayer();
  const progress = state.progresBar;
  const prevChallengeCount = useRef(0);

  function incrementBar() {
    const currentCount = state.doneChallenge.length;

    if (currentCount > prevChallengeCount.current) {
      if (state.doneChallenge.length === 14) {
        dispatch({ type: "increment_progres", payload: 100 });
        return;
      } else {
        dispatch({ type: "increment_progres", payload: Number(progress + 7) });
      }
      prevChallengeCount.current = currentCount;
    }
  }
  useEffect(() => {
    incrementBar();
  }, [state.doneChallenge]);

  return (
    <div className={styles.progress_bar}>
      <div
        className={styles.progress_fill}
        style={{ width: progress < 0 ? "0" : `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
