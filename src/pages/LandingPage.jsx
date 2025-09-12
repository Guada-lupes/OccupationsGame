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
        <h1 className={styles.h1}>Te damos la bienvenida{name.toUpperCase()}</h1>
        <div className={styles.container}>
          <div className={styles.img}>
            <img src="/mapa.png" alt="" />
          </div>
          <div className={styles.texto_container}>
            <p className={styles.p}>
          "En este planeta conviven catorce tribus, cada una con su propio
          saber, sus costumbres y su forma de aportar al bienestar común. Aunque
          distintas, todas se necesitan: unas producen lo que otras consumen,
          unas crean lo que otras transforman, unas investigan lo que otras
          aplican. El intercambio de bienes, ideas y servicios es lo que
          mantiene en equilibrio a este mundo. Tu viaje te llevará a conocerlas
          una a una. No será fácil: cada tribu protege sus conocimientos con
          retos y pruebas. Solo quien demuestra curiosidad, ingenio y valentía
          puede ganarse su confianza. ¿Estás listo/a para descubrir sus secretos
          y convertirte en un/a verdadero/a explorador/a del Planeta de las
          Profesiones?"
            </p>
            <p className={styles.p}>
              ¿Todo listo para comenzar la aventura?
            </p>
          </div>
        </div>
        <Button texto={"Comenzar"} link={"/all_tribus"} />
      </section>
    </>
  );
};

export default LandingPage;

            // <p className={styles.p}>
            //   "Has llegado al Planeta de las Profesiones, un mundo vibrante y en
            //   constante movimiento, donde el conocimiento es la energía que todo
            //   lo impulsa. Aquí, cada rincón guarda secretos sobre el trabajo
            //   humano, cada paso es un reto, y cada reto, una oportunidad de
            //   aprender. Tu misión es explorar este planeta desconocido, superar
            //   los desafíos que encontrarás y descubrir a qué tribu y a qué
            //   profesión sientes que perteneces. Prepárate: lo que hoy empieza
            //   como un juego, puede convertirse en la llave que abra las puertas
            //   de tu futuro."
            // </p>