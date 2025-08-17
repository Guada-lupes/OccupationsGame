import React from "react";
import { tribus } from "../../data/tribus";
import { Link } from "react-router-dom";
import { usePlayer } from "../context/PlayerContext";
import styles from "../styles/allTribus.module.css"

const AllTribusPage = () => {
  const { state } = usePlayer();
  const unlockTribes = (id) => state.unlockedTribe.includes(id);
  const challengeUnresolved = (id) => state.doneChallenge.includes(id);
  const theClass = (id)=>  `icono-desbloqueado icono ${challengeUnresolved(id) ? "" : "unresolved"}`

  return (
    <section>
    <h2>El planeta de las profesiones</h2>
    <p>Cada Tribu tiene sus propios misterios. ¿Podrás desbloquear todas las tribus? </p>
        <div className={styles.container}>
      {tribus.map((tribu, index) => {
        const Icon = tribu.imagen;
        return unlockTribes(tribu.id) ? (
          <Link to={`/${tribu.id}`} key={index}>
            <Icon name={theClass(tribu.id)} stroke="green" fill="none" />
          </Link>
        ) : (
          <Icon name="icono-bloqueado" stroke="green" fill="none" />
        );
      })}
    </div>
    </section>

  );
};

export default AllTribusPage;
