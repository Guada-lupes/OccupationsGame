import React from "react";
import styles from "../styles/challenge.module.css";
import { useRef, useEffect } from "react";
import { rotateCoin } from "../../utils/coinRotate";

export const CoinComponent = () => {
  const wrapperRef = useRef(null);
  //   useEffect(() => {
  //     const cleanup = rotateCoin(wrapperRef, 3000);
  //     return cleanup;
  //   }, []);

  return (
    <div className={styles.coin_container}>
      <div ref={wrapperRef} className={styles.coinWrapper}>
        <img
          className={`${styles.front} ${styles.coin}`}
          src="/cara_a.avif"
          alt="moneda cara a"
          width="200"
          
        />
        <img
          className={`${styles.back} ${styles.coin}`}
          src="/cara_b.avif"
          alt="moneda cara b"
          width="200"
          
        />
      </div>
    </div>
  );
};
