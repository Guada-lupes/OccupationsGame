import React from "react";
import Button from "../components/Button";
import { usePlayer } from "../context/PlayerContext";
import styles from "../styles/landingPage.module.css";

const LandingPage = () => {
  const { state } = usePlayer();
  const name = state.name.length > 1 ? ` ${state.name}` : "";
  return (
    <section>
      <div>
        <div className={styles.container}>
          <img className={styles.img} src="..\..\public\cardon.png" alt="" />
          <div className={styles.texto_container}>
            <h1 className={styles.p}>
              Hola{name}, te damos la bienvenida al Planeta de las profesiones
            </h1>
            <p className={styles.p}>
              En este pais cada tribu pertenece a una profesión. Descubre las 14
              tribus y sus peculiaridades superando retos y desbloqueando nuevos
              territorios.
            </p>
            <p className={styles.p}>
              ¿Estas preparada para comenzar la aventura?
            </p>
          </div>
        </div>
        <Button texto={"Comenzar"} link={"/all_tribus"} />
      </div>
    </section>
  );
};

export default LandingPage;
