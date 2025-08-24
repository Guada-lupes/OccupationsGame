import React from "react";
import { Link } from "react-router-dom";
import { logOut } from "../../utils/login";
import { usePlayer } from "../context/PlayerContext";
import styles from "../styles/header.module.css";

export const Header = () => {
  const { dispatch } = usePlayer();
  return (
    <div className={styles.container}>
      <Link to={"/all_tribus"}>Inicio</Link>
      {/* <Link>Como jugar</Link>
            <Link>Sobre la aplicación</Link>
             */}
      <Link to={"/"} onClick={() => logOut(dispatch)}>
        Salir
      </Link>
      <Link to={"/player"}>
        <img className={styles.img} src="/user.png" />
      </Link>
    </div>
  );
};

export default Header;
