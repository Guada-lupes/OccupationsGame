import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/button.module.css";

export function Button({ texto, link, onClick, id }) {
  return (
    <div >
      <Link to={link ?? "#"}>
        <button type="button" className={`${styles.button} btn`}key={id} onClick={onClick}>
          {texto}
        </button>
      </Link>
    </div>
  );
}

export default Button;
