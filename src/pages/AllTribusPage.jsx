import React from "react";
import { tribus } from "../../data/tribus";
import { Link } from "react-router-dom";
import { usePlayer } from "../context/PlayerContext";
import styles from "../styles/allTribus.module.css";

const AllTribusPage = () => {
  const { state } = usePlayer();
  const unlockTribes = (id) => state.unlockedTribe.includes(id);
  const challengeUnresolved = (id) => state.doneChallenge.includes(id);
  const theClass = (id) =>
    `icono-desbloqueado icono ${challengeUnresolved(id) ? "" : "unresolved"}`;

  return (
    <section className={styles.section}>
      <h1>El planeta de las profesiones</h1>
      <div className={styles.text_container}>
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
          y convertirte en un verdadero explorador del Planeta de las
          Profesiones?"
        </p>
      </div>

      <div className={styles.grid}>
        {tribus.map((tribu, index) => {
          const Icon = tribu.imagen;
          return unlockTribes(tribu.id) ? (
            <Link to={`/${tribu.id}`} key={index}>
              <Icon name={theClass(tribu.id)} stroke="green" fill="none" />
            </Link>
          ) : (
            <Icon key={index} name="icono-bloqueado icono" stroke="green" fill="none" />
          );
        })}
      </div>
    </section>
  );
};

export default AllTribusPage;
