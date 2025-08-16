import React from "react";
import { tribus } from "../../data/tribus";
import { Link } from "react-router-dom";
import { usePlayer } from "../context/PlayerContext";
import styles from "../styles/allTribus.module.css"

const AllTribusPage = () => {
  const { state } = usePlayer();
  const unlockTribes = (id) => state.unlockedTribe.includes(id);
  return (
    <>
    <h2>El planeta de las profesiones</h2>
    <p>Cada Tribu tiene sus propios misterios. ¿Podrás desbloquear todas las tribus? </p>
        <div className={styles.container}>
      {tribus.map((tribu, index) => {
        const Icon = tribu.imagen;
        return unlockTribes(tribu.id) ? (
          <Link to={`/${tribu.id}`} key={index}>
            <Icon stroke="green" fill="none" />
          </Link>
        ) : (
          <Icon stroke="green" fill="none" />
        );
      })}
    </div>
    </>

  );
};

export default AllTribusPage;
