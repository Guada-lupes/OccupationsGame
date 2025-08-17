import { useEffect, useState } from "react";
import Challenge from "./Challenge";
import OccupationsCard from "./OccupationsCard";
import { useParams } from "react-router-dom";
import { tribus } from "../../data/tribus";
import { usePlayer } from "../context/PlayerContext";
import styles from "../styles/tribuCard.module.css"

export const TribuCard = () => {
  const { state, dispatch } = usePlayer();

  //esta es la carta que se despliega cuando entramos en una tribu
  const { id } = useParams();

  const tribu = tribus.find((t) => t.id === id);
  const isWin = state.doneChallenge.includes(tribu.id);
  console.log(state);
  
  return (
    <div>
      <h1>{tribu.tribu}</h1>
      {
!isWin ? (      <div>
      <p>{tribu.descripcion}</p>
        <Challenge
          reto={tribu.reto}
          id={tribu.id}
          next={tribu.siguienteTribu}
          profesiones={tribu.profesiones}
        />
      </div>)
: <OccupationsCard profesiones={tribu.profesiones}/>
      }


    </div>
  );
};

export default TribuCard;
