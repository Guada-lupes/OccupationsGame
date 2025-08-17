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
    <div >
          <section className={styles.section}>
    <h1>El planeta de las profesiones</h1>
    <p>Cada Tribu tiene sus propios misterios. Una Tribu en verde signifa que has superado el reto. Una Tribu en rojo esta desbloqueada pero aún debes comprobar tu conocimeintos. ¿Podrás desbloquear todas las tribus? </p>
        </section>
        <div className={styles.tribus_container}>
          <div className={styles.grid}>
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
      
    </div>

    </div>


  );
};

export default AllTribusPage;
