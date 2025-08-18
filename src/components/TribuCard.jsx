import { useEffect, useState } from "react";
import Challenge from "./Challenge";
import OccupationsCard from "./OccupationsCard";
import { useParams } from "react-router-dom";
import { tribus } from "../../data/tribus";
import { usePlayer } from "../context/PlayerContext";
import styles from "../styles/tribuCard.module.css";

export const TribuCard = () => {
  const { state, dispatch } = usePlayer();

  //esta es la carta que se despliega cuando entramos en una tribu
  const { id } = useParams();

  const tribu = tribus.find((t) => t.id === id);
  const isWin = state.doneChallenge.includes(tribu.id);
  const Icon = tribu.imagen;
  return (
    <div className={styles.lados}>
      <section className={styles.section}>
        <h1>{tribu.tribu}</h1>
        <Icon
          name={"icono-desbloqueado icono-card"}
          stroke="green"
          fill="none"
        />
        {!isWin ? (
          <div>
            <p>{tribu.descripcion}</p>
            <div className={styles.challenge}>
              <Challenge
                reto={tribu.reto}
                id={tribu.id}
                next={tribu.siguienteTribu}
                profesiones={tribu.profesiones}
              />
            </div>
          </div>
        ) : (
          <OccupationsCard profesiones={tribu.profesiones} />
        )}
      </section>
    </div>
  );
};

export default TribuCard;
