import React from "react";
import Button from "../components/Button";
import { usePlayer } from "../context/PlayerContext";
import styles from "../styles/landingPage.module.css";

const LandingPage = () => {
  const { state } = usePlayer();
  const name = state.name.length > 1 ? ` ${state.name}` : "";
  return (
    <>
      <section className={styles.section}>
        <h1 className={styles.h1}>Bienvenida/o viajera/o{name}.</h1>
        <div className={styles.container}>
          <div className={styles.img}>
            <img src="/mapa.png" alt="" />
          </div>
          <div className={styles.texto_container}>
            <p className={styles.p}>
              "Has llegado al Planeta de las Profesiones, un mundo vibrante y en
              constante movimiento, donde el conocimiento es la energía que todo
              lo impulsa. Aquí, cada rincón guarda secretos sobre el trabajo
              humano, cada paso es un reto, y cada reto, una oportunidad de
              aprender. Tu misión es explorar este planeta desconocido, superar
              los desafíos que encontrarás y descubrir a qué tribu y a qué
              profesión sientes que perteneces. Prepárate: lo que hoy empieza
              como un juego, puede convertirse en la llave que abra las puertas
              de tu futuro."
            </p>
            <p className={styles.p}>
              ¿Estas preparada/o para comenzar la aventura?
            </p>
          </div>
        </div>
        <Button texto={"Comenzar"} link={"/all_tribus"} />
      </section>
    </>
  );
};

export default LandingPage;
