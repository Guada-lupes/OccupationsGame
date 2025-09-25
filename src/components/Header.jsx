import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logOut } from "../../utils/login";
import { usePlayer } from "../context/PlayerContext";
import ProgressBar from "./ProgressBar";
import styles from "../styles/header.module.css";

export const Header = () => {
  const { dispatch } = usePlayer();
  const [menu, setMenu] = useState(false);
  function openMenu() {
    setMenu((prev) => !prev);
  }

  return (
    <>
      <div className={styles.container}>
        <ProgressBar />
        <Link to={"/all_tribus"}>
          <p>Inicio</p>
        </Link>
        <Link to={"/about"}>
          <p>Sobre mi</p>
        </Link>
        <Link to={"/"} onClick={() => logOut(dispatch)}>
          <p>Salir</p>
        </Link>
        <Link to={"/player"}>
          <img className={styles.img} src="/user.png" />
        </Link>
      </div>{" "}
      <div className={styles.desplegable}>
        <ProgressBar />
        <div className={styles.menu_icon} onClick={openMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
        {menu && (
          <div className={styles.menu} onClick={openMenu}>
            <Link to={"/player"}>
              <img className={styles.img} src="/user.png" />
            </Link>
            <Link to={"/all_tribus"}>
              <p>Inicio</p>
            </Link>
            <Link to={"/about"}>
              <p>Sobre mi</p>
            </Link>
            <Link to={"/"} onClick={() => logOut(dispatch)}>
              <p>Salir</p>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
